export function ObjectToKVArray(obj: Record<string, any>): { key: string; value: any; }[] {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
}

export function KVarrayToObject(arr: { key: string; value: any; }[]): Record<string, any> {
    return arr.reduce((acc, { key, value }) => {
        acc[key] = value;
        return acc;
    }, {} as Record<string, any>);
}
