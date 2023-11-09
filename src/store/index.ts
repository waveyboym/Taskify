import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TasksState, taskType } from '../types';
import { tasksEmpty } from '../content';

export const useTaskStore = create<TasksState>()(
    devtools(
        persist(
        (set) => ({
            tasks: tasksEmpty,
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
        }),
        {name: 'tasks-store',}
        )
    )
)