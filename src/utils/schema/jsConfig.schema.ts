import * as z from "zod";

export const jsConfigSchema = z.object({
          javascript: z.string().optional(),
})