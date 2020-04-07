import {createContext} from "react";

type  WorkOutType = 'a' | 'b';

interface WorkOutHistory {
    [key: string] : Array<{
        exercise: string,
        value: number
    }>
}

class WorkOutStore {
    currentSquat: number;
    currentBenchPress:number;
    currentOverheadPress:number;
    currentDeadLift:number;
    currentBabelRow:number;

    lastWorkOutType: WorkOutType;

    history : WorkOutHistory
}

const WorkOutStoreConext = createContext(new WorkOutStore());

export default WorkOutStoreConext;