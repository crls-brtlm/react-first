import { TRootState } from "../reducers";

export function autoIncrement(store: TRootState) {
  return store.counter.autoIncrement;
}
