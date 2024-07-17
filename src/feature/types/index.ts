export interface OrderData {
  id: number;
  user_id: number;
  order_date: number;
  order_status: string;
  document_ids: number[];
}

export interface UserDisplayData {
  id: number; 
  email: string; 
  full_name: string; 
  inn: number; 
  user_role: string;
}

export interface MenuItem {
  id: number; 
  name: string; 
  url: string;
  isNew?: boolean;
  toDelete?: boolean;
  toUpdate?: boolean;
  sort_index?: number;
}

export interface PageContentData {
  id?: number;
  pageUrl: string;
  pageTitle?: string;
  content?: string;
}

export interface OrderItemData {
  category: string;
  name: string;
  quantity: number;
  price: number;
}
