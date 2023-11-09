export interface taskType{
    status: TASKTYPE;
    text: string;
    time: Date;
}

export enum OSTYPE{
    null = "null",
    aix = "aix",
    darwin = "darwin",
    freebsd = "freebsd",
    linux = "linux",
    openbsd = "openbsd",
    sunos = "sunos",
    win32 = "win32",
    android = "android"
}

export enum TASKTYPE{
    null = "null",
    incomplete = "incomplete",
    complete = "complete",
    hold = "hold"
}

export interface TasksState {
    tasks: taskType[];
    overwriteTask: (row_index: number, cell_index: number, data: taskType) => void;
    setTasks: (set_to: taskType[]) => void;
}