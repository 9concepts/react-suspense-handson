import { fetchData } from "./fetchData";

const dataMap: Map<string, string> = new Map();

export function useData1(cacheKey: string): string {
  const cachedData = dataMap.get(cacheKey);
  if (cachedData === undefined) {
    throw fetchData().then((d) => dataMap.set(cacheKey, d))
  }

  return cachedData;
}
