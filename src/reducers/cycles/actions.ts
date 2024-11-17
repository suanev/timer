import { CyclesActionTypes } from "./constants";
import { Cycle } from "./reducers";

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: CyclesActionTypes.ADD_NEW_CYCLE,
    payload: { newCycle },
  };
};

export const interruptCurrentCycleAction = () => {
  return {
    type: CyclesActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
};

export const markCurrentCycleAsFinishedAction = () => {
  return {
    type: CyclesActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
};
