export interface IAuthResponse {
  token: string;
  userId: number;
  error?: string;
}

export interface IUserDataResponse {
  data: UserData;
  error?: string;
}

export interface UserData {
  bank_account?: string | null;
  bank_code?: string | null;
  bank_name?: string | null;
  cargo_city?: string;
  cargo_recevier?: string;
  ceo?: string;
  ceo_base?: string;
  ceo_full?: string;
  ceo_genitive?: string;
  corr_account?: string;
  email: string;
  full_name?: string;
  id?: number;
  inn: string;
  isconfirmed?: boolean;
  law_address?: string;
  user_role?: string;
  phone: string;
}
