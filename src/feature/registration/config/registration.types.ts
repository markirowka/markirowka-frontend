export interface User {
  email: string;
  password?: string;
  full_name: string;
  ceo?: string;
  ceo_full?: string;
  ceo_genitive?: string;
  law_address?: string;
  inn: number;
  cargo_recevier?: string;
  cargo_city?: string;
}

export interface IRegistrationResponse {
	email: string,
	id: number,
	message: string,
}
