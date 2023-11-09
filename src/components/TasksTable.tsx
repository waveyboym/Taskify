import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
//import { users } from "../content";
import Task from "./Task";
import { taskType } from "../types";
import { useEffect, useState } from "react";

const columns = [
    {
        key: "Sun 11",
        label: "Sun 11"
    },
    {
        key: "Mon 12",
        label: "Mon 12"
    },
    {
        key: "Tue 13",
        label: "Tue 13"
    },
    {
        key: "Wed 14",
        label: "Wed 14"
    }
]

const row_keys = [
    "0am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", 
    "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"
]

const TasksTable = () => {
    const [tasks, settasksState] = useState<taskType[]>([]);

    function calculateCellIndex(row_index: number, cell_index: number){return ((row_index * 4) + cell_index);}

    useEffect(() => {
        const loadData = () => {
            const res = JSON.parse(window.gateway.readData());
            settasksState(res);
        }

        loadData();
    }, [])
    

    return (
    <Table hideHeader 
        aria-label="Example table with client side pagination"
        classNames={{wrapper: "min-h-[222px]",}}>
            <TableHeader>
                {columns.map((column) =>
                <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
            </TableHeader>
            <TableBody>
                {row_keys.map((key_value, index) => 
                    <TableRow key={key_value}>
                        <TableCell>
                            <Task status={tasks[calculateCellIndex(index, 0)].status} text={tasks[calculateCellIndex(index, 0)].text}/>
                        </TableCell>
                        <TableCell>
                            <Task status={tasks[calculateCellIndex(index, 1)].status} text={tasks[calculateCellIndex(index, 1)].text}/>
                        </TableCell>
                        <TableCell>
                            <Task status={tasks[calculateCellIndex(index, 2)].status} text={tasks[calculateCellIndex(index, 2)].text}/>
                        </TableCell>
                        <TableCell>
                            <Task status={tasks[calculateCellIndex(index, 3)].status} text={tasks[calculateCellIndex(index, 3)].text}/>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

export default TasksTable