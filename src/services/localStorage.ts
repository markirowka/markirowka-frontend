import { ItemDataClothes, ItemDataShoes, OrderItemData } from "@/feature/types";

class LocalStorageService {

    private static instance: LocalStorageService | null = null;

    private orderDataKey = "ORDER_DATA_KEY";
    private shoesSaveDataKey = "SHOES_SAVE_KEY";
    private clothesSaveKey = "CLOTHES_SAVE_KEY";

    // Private constructor to prevent direct instantiation
    private constructor() {}

    // Static method to get the instance of the class
    public static getInstance(): LocalStorageService {
        if (!LocalStorageService.instance) {
            LocalStorageService.instance = new LocalStorageService();
        }
        return LocalStorageService.instance;
    }

    // Save order data to localStorage
    public saveOrder(orderData: OrderItemData[]): void {
        localStorage.setItem(this.orderDataKey, JSON.stringify(orderData));
    }

    // Save clothes data to localStorage
    public saveClothes(data: ItemDataClothes[]): void {
        localStorage.setItem(this.clothesSaveKey, JSON.stringify(data));
    }

    // Save shoes data to localStorage
    public saveShoes(data: ItemDataShoes[]): void {
        localStorage.setItem(this.shoesSaveDataKey, JSON.stringify(data));
    }

    // Retrieve saved order data from localStorage
    public getSavedOrder(): OrderItemData[] {
        const savedOrder = localStorage.getItem(this.orderDataKey);
        if (savedOrder) {
            try {
                const order = JSON.parse(savedOrder);
                return order || [];
            } catch (e) {
                return [];
            }
        }
        return [];
    }

    // Retrieve saved clothes data from localStorage
    public getSavedClothes(): ItemDataClothes[] {
        const savedClothes = localStorage.getItem(this.clothesSaveKey);
        if (savedClothes) {
            try {
                const clothes = JSON.parse(savedClothes);
                return clothes || [];
            } catch (e) {
                return [];
            }
        }
        return [];
    }

    // Retrieve saved shoes data from localStorage
    public getSavedShoes(): ItemDataShoes[] {
        const savedShoes = localStorage.getItem(this.shoesSaveDataKey);
        if (savedShoes) {
            try {
                const shoes = JSON.parse(savedShoes);
                return shoes || [];
            } catch (e) {
                return [];
            }
        }
        return [];
    }

    public clearAll(): void {
        localStorage.removeItem(this.orderDataKey);
        localStorage.removeItem(this.shoesSaveDataKey);
        localStorage.removeItem(this.clothesSaveKey);
    }
}

// Usage Example:
export const localStorageService = LocalStorageService.getInstance();
