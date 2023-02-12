import { useState } from "react"
import { fetchData } from "./fetchData";
import { useData1 } from "./useData1";

export const DataLoader: React.VFC = () => {
  const data = useData1('DataLoader1')

  return <div>Data is {data}</div>
}
