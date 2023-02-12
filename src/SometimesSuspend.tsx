import { sleep } from "./sleep"

export const SometimeSuspend: React.VFC = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }

  return <p>SometimesSuspend</p>
}
