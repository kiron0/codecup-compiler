import axios from "axios";

export const COMPILER_API = process.env.NEXT_PUBLIC_COMPILER_API!;
export const CODE_COMPILER_API = process.env.NEXT_PUBLIC_CODE_COMPILER_API!;
export * from "./constant";
export * from "./template";

export const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});
