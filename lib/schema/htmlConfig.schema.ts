import * as z from "zod";

export const htmlConfigSchema = z.object({
          html: z.string().optional(),
})