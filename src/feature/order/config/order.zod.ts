// import { hasCommonElement, markableCategories } from "@/utils";
import { ADMIN_ROLE } from "@/config/env";
import { UserData } from "@/feature/auth";
import { userAtom } from "@/feature/common";
import { useAtomValue } from "jotai";
import { z } from "zod"
import { hasSpecifyAtom } from "../store";

export type ValidationContext = {
  hasSpecify: boolean;
  user: UserData | false | null;
};

export const createOrderFormSchema = () => {
  // Получаем текущие значения из Jotai
  const user = useAtomValue(userAtom);
  const hasSpecify = useAtomValue(hasSpecifyAtom);
  
  return z.object({
    category: z.string(),
    name: z.string().min(3, { message: 'Название должно содержать не менее 3-х символов' }),
    quantity: z.coerce.number(),
    price: z.coerce.number(),
    date: z.string(),
    tnved: z.string().optional(),
    country: z.string().optional(),
  }).superRefine((data, ctx) => {
    const isAdmin = user && user.user_role === ADMIN_ROLE;
    if (isAdmin) return;

    const dt = new Date(data.date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const daysBack = hasSpecify ? 4 : 30;
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - daysBack);

    if (isNaN(dt.getTime()) || dt < startDate || dt > tomorrow) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Для категории "${data.category}" 
        дата должна быть в пределах ${daysBack} ${hasSpecify ? "(с маркировкой)" : ""}
        дней до или 1 дня после текущей`,
        path: ['date'],
      });
    }
  });
};

export const OrderFormSchema = z.object({
  category: z.string(),
  name: z.string().min(3, { message: 'Название должно содержать не менее 3-х символов' }),
  quantity: z.coerce.number(),
  price: z.coerce.number(),
  date: z.string(),
  tnved: z.string().optional(),
  country: z.string().optional(),
}).superRefine((data, ctx: z.RefinementCtx & { context?: ValidationContext }) => {
  // Достаём значения из контекста
  const context = ctx.context;
  console.log("With context:", ctx, context)
  const { hasSpecify, user } = context || {};

  // Проверка роли
  const isAdmin = user && user.user_role === ADMIN_ROLE;

  if (isAdmin) return; // Админы проходят без ограничений

  const dt = new Date(data.date);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const daysBack = hasSpecify ? 4 : 30;

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - daysBack);

  if (isNaN(dt.getTime()) || dt < startDate || dt > tomorrow) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Для категории "${data.category}" 
	  дата должна быть в пределах ${daysBack} ${hasSpecify ? "(с маркировкой)" : ""}
	  дней до или 1 дня после текущей`,
      path: ['date'],
    });
  }
});

export type OrderFormSchemaType = z.infer<typeof OrderFormSchema>


