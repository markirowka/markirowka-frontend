import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { OrderFormSchemaType } from "./config";

const headers = ["Категория", "Название", "Количество", "Цена", "Дата документа"];

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

export function getOrderFromExcelFile (file: File): Promise<OrderFormSchemaType[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json<OrderFormSchemaType>(worksheet);

      resolve(jsonData);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
}