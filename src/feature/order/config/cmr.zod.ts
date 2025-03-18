import { z } from "zod";

export const CMRDeliveryDataSchema = z.object({
  weight: z.string(),
  volume: z.string(),
  cargoPlaceCount: z.number(),
  packType: z.string(),
  driverName: z.string(),
  documents: z.string(),
  autoMark: z.string(),
  autoNumber: z.string().optional(),
  subAutoNumber: z.string().optional(),
});

export type CMRDeliveryData = z.infer<typeof CMRDeliveryDataSchema>;
