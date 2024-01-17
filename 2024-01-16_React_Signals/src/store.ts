import { signal } from "@preact/signals-react";
import { differenceInSeconds } from "date-fns";

export const updatesCount = signal<Date[]>([]);
export const increment = () => {
  updatesCount.value = [...updatesCount.value, new Date()]
}

export const recalculateSpeed = () => {
  setInterval(() => {
    updatesCount.value = updatesCount.value.filter(date => differenceInSeconds(new Date(), date) < 60)
  }, 1000);
}

recalculateSpeed();

export const unstuck = signal(0);
export const makeUnstuck = () => {
  unstuck.value++;
}
