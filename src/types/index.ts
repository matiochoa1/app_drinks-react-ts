import { z } from "zod";
import {
	categoriesApiResponseSchema,
	searchFilterSchema,
} from "../schemas/recipes-schemas";

export type Categories = z.infer<typeof categoriesApiResponseSchema>;
export type SearchFilter = z.infer<typeof searchFilterSchema>;
