import * as z from "zod";

export const cssConfigSchema = z.object({
          css: z.string().optional(),
})