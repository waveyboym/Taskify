import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from "@nextui-org/react"
import Task from "./Task";
import { useEffect, useState } from "react";
import { useTaskStore } from "../store";
import { TASKTYPE, taskType } from "../types";

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

const columns_num = [0, 1, 2, 3]

const row_keys = [
    "0am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", 
    "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"
]

const TasksTable = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [editingTask, setEditingTask] = useState<taskType>({ status: TASKTYPE.null, text: "", time: new Date() });
    const { tasks, overwriteTask, setTasks } = useTaskStore((state) => { return { tasks: state.tasks, overwriteTask: state.overwriteTask, setTasks: state.setTasks }; });

    function calculateCellIndex(row_index: number, cell_index: number){return ((row_index * 4) + cell_index);}

    function overWriteThisTask(row_index: number, cell_index: number, data: taskType){
        onOpen();
        setEditingTask(data);
        overwriteTask(row_index, cell_index, data);
    }

    useEffect(() => {
        const loadData = async() => {
            const res: string = await window.gateway.readData();
            const parsed = JSON.parse(res);
            setTasks(parsed);
        }

        loadData();
    }, [])
    
    return (
        <>
            <Table hideHeader 
            aria-label="Example table with client side pagination"
            classNames={{wrapper: "min-h-[222px] rounded-[35px]",}}>
                <TableHeader>
                    {columns.map((column) =>
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                    )}
                </TableHeader>
                <TableBody>
                    {row_keys.map((key_value, index) => 
                        <TableRow key={key_value}>
                            {columns_num.map((column_value) => 
                                    <TableCell key={index * column_value}>
                                        <Task 
                                            task={tasks[calculateCellIndex(index, column_value)]} 
                                            row_index={index} 
                                            cell_index={column_value} 
                                            overWriteThisTask={overWriteThisTask}/>
                                    </TableCell>
                                )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                label="Details"
                                placeholder="Enter details about the task"
                                variant="bordered"
                            />
                            <Input
                                label="Status"
                                placeholder="Enter your password"
                                variant="bordered"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                            Remove task
                            </Button>
                            <Button color="warning" variant="flat" onPress={onClose}>
                            Discard
                            </Button>
                            <Button color="secondary" onPress={onClose}>
                            Update task
                            </Button>
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>

    );
}

export default TasksTable