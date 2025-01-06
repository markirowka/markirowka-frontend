import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { OrderFormSchema, OrderFormSchemaType } from "./config";

const headers = ["Категория", "Название", "Количество", "Цена", "Дата документа"];

export function transformData(input: Record<string, any>[]): OrderFormSchemaType[] {
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

export async function saveOrderToExcel (data: OrderFormSchemaType[]) {
    const rows = data.map((item) => [
      item.category,
      item.name,
      item.quantity,
      item.price,
      item.date,
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
        resolve(transformData(jsonData));
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