export interface OrderData {
  id: number;
  user_id: number;
  order_date: number;
  order_status: string;
  document_ids: number[];
}

export interface UserDisplayData {
  id: number;
  user_id: number;
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

export interface ContentBlock {
  id: number;
  article_id?: number;
  content: string;
}

export interface ItemDataShoes {
  fullName?: string;
  tradeMark?: string;
  articleType?: string;
  articleName?: string;
  shoesType?: string;
  color?: string;
  size?: string;
  upperMaterial?: string;
  liningMaterial?: string;
  bottomMaterial?: string;
  tnved: string;
}

export interface ItemDataClothes {
  fullName?: string;
  tradeMark?: string;
  articleType?: string;
  articleName?: string;
  clothesType?: string;
  color?: string;
  size?: string;
  composition?: string;
  tnved: string;
}

export interface CatItem {
  id: number;
  name: string;
  metrik?: string;
  okei_code?: string;
}

export interface BoolResponse { 
  success: boolean 
}
