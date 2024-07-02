import { backendInstance } from "@/services/backendService";

export function ObjectToKVArray(obj: Record<string, any>): { key: string; value: any; }[] {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
}

export function KVarrayToObject(arr: { key: string; value: any; }[]): Record<string, any> {
    return arr.reduce((acc, { key, value }) => {
        acc[key] = value;
        return acc;
    }, {} as Record<string, any>);
}

export function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    return formattedDate;
  }

export async function downloadFileById (fileId: number, userId: number) {
    const files = await backendInstance.getDownloads();
    if (!files) {
        alert("File not found")
        return;
    }
    const fileToDownload = files.find((file) => {
        return file.id === fileId
    })
    if (!fileToDownload) {
        alert("File not found")
        return;
    }
    backendInstance.gownloadFile(fileToDownload.file_name, userId);
}
