import { create } from 'zustand';
import { TasksState, taskType } from '../types';

export const useTaskStore = create<TasksState>()(
    (set) => ({
        tasks: [],
        overwriteTask: (row_index: number, cell_index: number, data: taskType) => set(
            (state) => ({tasks: state.tasks.map((item, index) => {
                if(index == (row_index * 4) + cell_index){
                    return data;
                }
                else{
                    return item;
                }
            }),})
        ),
        setTasks: (set_to: taskType[]) => set((_state) => ({tasks: set_to,})),
    })
)