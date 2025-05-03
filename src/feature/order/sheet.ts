import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { OrderFormSchema, OrderFormSchemaType } from "./config";
import { ShoesFormSchema, ShoesFormSchemaType } from "../shoes";
import { ClothesFormSchema, ClothesFormSchemaType } from "../clothes";

const headers = ["Категория", "Название", "Количество", "Цена", "Дата документа", "Код ТНВЭД", "Страна происхождения"];

export function transformDataOrder(input: Record<string, any>[]): OrderFormSchemaType[] {
  return input.map((obj) => {
    const values = Object.values(obj);
    
    // Сопоставляем значения по индексу: [0] -> date, [1] -> category и т.д.
    console.log("Values:", values );
    const mappedData = {
      date: String(values[4]),
      category: String(values[0]),
      name: String(values[1]),
      quantity: Number(values[2]),
      price: Number(values[3]),
      tnved: String(values[5]),
      country: String(values[6])
    };

    try {
      // Валидация данных с помощью OrderFormSchema
      const validatedData = OrderFormSchema.parse(mappedData);
      return validatedData;
    } catch (error) {
      console.error("Validation Error:", error);
      throw error;
    }
  });
}


export function transformDataClothes(input: Record<string, any>[]): ClothesFormSchemaType[] {
  return input.map((obj) => {
    // Проверяем наличие ключа "ТНВЭД", если его нет — добавляем его в начало объекта
    if (!("ТНВЭД" in obj)) {
      obj = { "ТНВЭД": "", ...obj };
    }

    let values = Object.values(obj);


    // Сопоставляем индексы с полями
    const mappedData: ClothesFormSchemaType = {
      tnved: String(values[0]), // Теперь "ТНВЭД" гарантированно на месте
      fullName: String(values[1]),
      tradeMark: String(values[2]),
      articleType: String(values[3]),
      articleName: String(values[4]),
      clothesType: String(values[5]),
      color: String(values[6]),
      size: String(values[7]),
      composition: String(values[8]),
    };

    try {
      return ClothesFormSchema.parse(mappedData);
    } catch (error) {
      console.error("Validation Error:", error);
      throw error;
    }
  });
}

export function transformDataShoes(input: Record<string, any>[]): ShoesFormSchemaType[] {
  return input.map((obj) => {
    if (!("ТНВЭД" in obj)) {
      obj = { "ТНВЭД": "", ...obj };
    }
    
    const values = Object.values(obj);
    
    // Сопоставляем значения по индексу: [0] -> date, [1] -> category и т.д.
    console.log("Values:", values );
    const mappedData: ShoesFormSchemaType = {
      tnved: String(values[10]),
      fullName: String(values[0]),
      tradeMark: String(values[1]),
      articleType: String(values[2]),
      articleName: String(values[3]),
      shoesType: String(values[4]),
      color: String(values[5]),
      size: String(values[6]),
      upperMaterial: String(values[7]),
      liningMaterial: String(values[8]),
      bottomMaterial: String(values[9]),
    };

    try {

      const validatedData = ShoesFormSchema.parse(mappedData);
      return validatedData;
    } catch (error) {
      console.error("Validation Error:", error);
      throw error;
    }
  });
}

export async function saveOrderToExcel (data: OrderFormSchemaType[]) {
    const rows = data.map((item) => [
      item.category,
      item.name,
      item.quantity,
      item.price,
      item.date,
      item.tnved || " ",
      item.country || " "
    ]);

   // Создание рабочего листа и книги
   const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
   const workbook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
 
   // Генерация файла Excel в формате blob
   const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
   const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
 
   // Скачивание файла
   saveAs(blob, "Orders.xlsx");   
}

export function getOrderFromExcelFile(file: File): Promise<OrderFormSchemaType[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      
      if (!event.target?.result) {
        console.error("[getOrderFromExcelFile] Error: event.target.result is null or undefined");
        reject(new Error("Failed to read file"));
        return;
      }

      const data = new Uint8Array(event.target.result as ArrayBuffer);
      try {
        const workbook = XLSX.read(data, { type: "array" });
        console.log("[getOrderFromExcelFile] Workbook read successfully:", workbook);

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        if (!worksheet) {
          console.error("[getOrderFromExcelFile] Error: No worksheet found in workbook");
          reject(new Error("No worksheet found"));
          return;
        }
        console.log("[getOrderFromExcelFile] Worksheet selected:", worksheet);

        const jsonData = XLSX.utils.sheet_to_json<OrderFormSchemaType>(worksheet, {
          raw: true, // Включаем необработанные данные
        });
        console.log("[getOrderFromExcelFile] JSON data parsed:", jsonData);
        resolve(transformDataOrder(jsonData));
      } catch (error) {
        console.error("[getOrderFromExcelFile] Error during parsing:", error);
        reject(error);
      }
    };

    reader.onerror = (error) => {
      console.error("[getOrderFromExcelFile] FileReader onerror triggered:", error);
      reject(error);
    };

    reader.readAsArrayBuffer(file);
    console.log("[getOrderFromExcelFile] FileReader readAsArrayBuffer called");
  });
}

export function loadShoesFromExcel(file: File): Promise<ShoesFormSchemaType[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (!event.target?.result) {
        console.error("[loadShoesFromExcel] Error: event.target.result is null or undefined");
        reject(new Error("Failed to read file"));
        return;
      }

      const data = new Uint8Array(event.target.result as ArrayBuffer);
      try {
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        if (!worksheet) {
          console.error("[loadShoesFromExcel] Error: No worksheet found in workbook");
          reject(new Error("No worksheet found"));
          return;
        }

        const jsonData = XLSX.utils.sheet_to_json<ShoesFormSchemaType>(worksheet, {
          raw: true,
        });
        console.log("Shoes object:", jsonData);

        resolve(transformDataShoes(jsonData));
      } catch (error) {
        console.error("[loadShoesFromExcel] Error during parsing:", error);
        reject(error);
      }
    };

    reader.onerror = (error) => {
      console.error("[loadShoesFromExcel] FileReader onerror triggered:", error);
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
}

export function loadClothesFromExcel(file: File): Promise<ClothesFormSchemaType[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (!event.target?.result) {
        console.error("[loadClothesFromExcel] Error: event.target.result is null or undefined");
        reject(new Error("Failed to read file"));
        return;
      }

      const data = new Uint8Array(event.target.result as ArrayBuffer);
      try {
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        if (!worksheet) {
          console.error("[loadClothesFromExcel] Error: No worksheet found in workbook");
          reject(new Error("No worksheet found"));
          return;
        }

        const jsonData = XLSX.utils.sheet_to_json<ClothesFormSchemaType>(worksheet, {
          raw: true,
        });
        console.log("Clothes object:", jsonData);


        resolve(transformDataClothes(jsonData));
      } catch (error) {
        console.error("[loadClothesFromExcel] Error during parsing:", error);
        reject(error);
      }
    };

    reader.onerror = (error) => {
      console.error("[loadClothesFromExcel] FileReader onerror triggered:", error);
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
}

export async function saveShoesToExcel(data: ShoesFormSchemaType[]) {
  console.log("Data:", data)
  const rows = data.map((item) => [
    item.fullName,
    item.tradeMark,
    item.articleType,
    item.articleName,
    item.shoesType,
    item.color,
    item.size,
    item.upperMaterial,
    item.liningMaterial,
    item.bottomMaterial,
    item.tnved,
  ]);

  const headers = [
    "Наименоание",
    "Торговая марка",
    "Модель/Артикул",
    "Номер модели/артикула",
    "Тип обуви",
    "Цвет",
    "Размер",
    "Материал верха",
    "Материал подкладки",
    "Материал подошвы",
    "ТНВЭД",
  ];

  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Shoes");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

  saveAs(blob, "Shoes.xlsx");
}

export async function saveClothesToExcel(data: ClothesFormSchemaType[]) {
  const rows = data.map((item) => [
    item.tnved,
    item.fullName,
    item.tradeMark,
    item.articleType,
    item.articleName,
    item.clothesType,
    item.color,
    item.size,
    item.composition,
  ]);

  const headers = [
    "ТНВЭД",
    "Наименование",
    "Торговая марка",
    "Модель/Артикул",
    "Номер модели/артикула",
    "Тип одежды",
    "Цвет",
    "Размер",
    "Состав",
  ];

  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Clothes");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

  saveAs(blob, "Clothes.xlsx");
}