import * as z from "zod";

export const cssConfigSchema = z.object({
          cssConfig: z.string().min(1, "CSS config/CDN is cannot be empty."),
})