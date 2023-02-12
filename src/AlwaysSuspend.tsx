import { sleep } from "./sleep"

export const AlwaysSuspend: React.VFC = () => {
  console.log("AlwaysSuspend is rendered.")
  throw sleep(1000)
}
