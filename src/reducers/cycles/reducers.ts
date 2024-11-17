import { produce } from "immer";
import { CyclesActionTypes } from "./constants";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

const cyclesReducer = (state: CyclesState, action: any) => {
  switch (action.type) {
    case CyclesActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    case CyclesActionTypes.INTERRUPT_CURRENT_CYCLE:
      return produce(state, (draft) => {
        const currentCycleIndex = draft.cycles.findIndex(
          (cycle) => cycle.id === state.activeCycleId
        );
        if (currentCycleIndex < 0) return;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
        draft.activeCycleId = null;
      });
    case CyclesActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return produce(state, (draft) => {
        const currentCycleIndex = draft.cycles.findIndex(
          (cycle) => cycle.id === state.activeCycleId
        );
        if (currentCycleIndex < 0) return;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
        draft.activeCycleId = null;
      });
    default:
      return state;
  }
};

export default cyclesReducer;
