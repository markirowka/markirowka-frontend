import { z } from "zod"

export const EditProfileFormSchema = z.object({
	email: z
	.string()
	.min(1, { message: "Это поле должно быть заполнено" })
	.email("Данный E-mail некорретный."),
	phone: z.string().refine(
		(value) => {
		  const digits = value.replace(/\D/g, "");
		  return digits.length >= 10;
		},
		{
		  message: "Номер телефона должен содержать не менее 10 цифр",
		}
	  ),
	full_name: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }).refine(
		(value) => {
		  return value.indexOf(" ") > 0 ? true : false;
		},
		{
		  message: "Наименование должно состоять минимум из 2 слов",
		}
	  ),
	ceo: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }).refine(
		(value) => {
		  return value.indexOf(" ") > 0 ? true : false;
		},
		{
		  message: "Наименование должно состоять минимум из 2 слов",
		}
	  ),
	ceo_full: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }).refine(
		(value) => {
		  return value.indexOf(" ") > 0 ? true : false;
		},
		{
		  message: "Наименование должно состоять минимум из 2 слов",
		}
	  ),
	ceo_genitive: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	law_address: z.string().min(6, { message: 'Поле должно содержать не менее 6-ти символов' }),
	inn: z.coerce.number().optional(),
	gln: z.string().max(64, { message: 'Не более 64 символов' }),
  cargo_recevier: z.string().refine(
	(value) => {
	  return value.indexOf(" ") > 0 ? true : false;
	},
	{
	  message: "Наименование должно состоять минимум из 2 слов",
	}
  ),
  bank_account: z.string().min(6, { message: "Поле должно содержать не менее 6-ти символов" }),
  bank_code: z.string().min(6, { message: "Поле должно содержать не менее 6-ти символов" }),
  bank_name: z.string().min(6, { message: "Поле должно содержать не менее 6-ти символов" }),
  corr_account: z.string().min(6, { message: "Поле должно содержать не менее 6-ти символов" }),
  cargo_city: z.string().min(3, { message: 'Поле должно содержать не менее 3-х символов' }),
})

export type EditProfileFormSchemaType = z.infer<typeof EditProfileFormSchema>