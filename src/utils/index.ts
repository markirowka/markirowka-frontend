import { backendInstance } from "@/services/backendService";

export function ObjectToKVArray(
  obj: Record<string, any>
): { key: string; value: any }[] {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
}

export function KVarrayToObject(
  arr: { key: string; value: any }[]
): Record<string, any> {
  return arr.reduce((acc, { key, value }) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, any>);
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}

export function formatTimestampWithOffset(
  orderDate: number,
  offsetDays: number
) {
  const date = new Date(orderDate * 1000);
  date.setDate(date.getDate() + offsetDays);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export async function downloadFileById(fileId: number, userId: number) {
  const files = await backendInstance.getDownloadsByFileId(fileId);
  if (!files) {
    alert("File not found");
    return;
  }
  const fileToDownload = files.find((file) => {
    return file.id === fileId;
  });
  if (!fileToDownload) {
    alert("File not found");
    return;
  }
  backendInstance.downloadFile(fileToDownload.file_name, userId);
}

export function urlNamingFilter(url: string): string {
  return url.startsWith("/") ? url.substring(1) : url;
}

export const sortMenuByIndex = (a: any, b: any): number => {
  const indexA = a.original?.sort_index || a.sort_index;
  const indexB = b.original?.sort_index || b.sort_index;
  if (!indexA && !indexB) return 0;
  if (!indexA && indexB) return 1;
  if (indexA && !indexB) return -1;
  if (indexA && indexB) {
    if (indexB === indexA) return 0;
    if (indexA < indexB) return -1;
    if (indexA > indexB) return 1;
  }
  return 0;
};
