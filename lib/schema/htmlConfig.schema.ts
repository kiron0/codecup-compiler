import * as z from "zod";

export const htmlConfigSchema = z.object({
          htmlConfig: z.string().min(1, "HTML config/CDN is cannot be empty."),
})