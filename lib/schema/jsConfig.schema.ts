import * as z from "zod";

export const jsConfigSchema = z.object({
          jsConfig: z.string().min(1, "JavaScript config/CDN is cannot be empty."),
})