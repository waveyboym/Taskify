import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Checkbox, Select, SelectItem} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from "@nextui-org/react";
import Task from "./Task";
import { useEffect, useState } from "react";
import { useTaskStore } from "../store";
import { TASKTYPE, taskType } from "../types";
import { selectStatus } from "../content";

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

interface co_ords{
    row: number;
    col: number;
}

const TasksTable = () => {
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const [editingTask, setEditingTask] = useState<taskType>({ status: TASKTYPE.null, text: "", time: new Date().toUTCString(), send_notification: false});
    const { tasks, overwriteTask, setTasks } = useTaskStore((state) => { return { tasks: state.tasks, overwriteTask: state.overwriteTask, setTasks: state.setTasks }; });
    const [coords, setCoords] = useState<co_ords>({row: 0, col: 0});
    
    function calculateCellIndex(row_index: number, cell_index: number){return ((row_index * 4) + cell_index);}

    function overWriteThisTask(row_index: number, cell_index: number, data: taskType){
        setEditingTask(data);
        setCoords({row: row_index, col: cell_index});
        onOpen();
    }

    function cleanThisTask(){
        overwriteTask(coords.row, coords.col, { status: TASKTYPE.null, text: "", time: new Date().toUTCString(), send_notification: false});
        setEditingTask({ status: TASKTYPE.null, text: "", time: new Date().toUTCString(), send_notification: false});
        setCoords({row: 0, col: 0});
        onClose();
    }

    function updateThisTask(){
        overwriteTask(coords.row, coords.col, editingTask);
        setEditingTask({ status: TASKTYPE.null, text: "", time: new Date().toUTCString(), send_notification: false});
        setCoords({row: 0, col: 0});
        onClose();
    }

    function discardThisTask(){
        setEditingTask({ status: TASKTYPE.null, text: "", time: new Date().toUTCString(), send_notification: false});
        setCoords({row: 0, col: 0});
        onClose();
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
            classNames={{wrapper: "min-h-[222px] rounded-[35px] w-full",}}>
                <TableHeader>
                    {columns.map((column) =>
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                    )}
                </TableHeader>
                <TableBody>
                    {row_keys.map((key_value, index) => 
                        <TableRow key={key_value}>
                            {columns_num.map((column_value) => 
                                    <TableCell key={calculateCellIndex(index, column_value)}>
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
                classNames={{
                    base: "text-background bg-[#18181B]",
                }}
            >
                <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Task details</ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                label="Details"
                                placeholder="Enter details about the task"
                                variant="bordered"
                                value={editingTask.text}
                                onValueChange={(new_details: string) => {setEditingTask({ ... editingTask, text : new_details})}}
                            />
                            <Input
                                autoFocus
                                label="Date and time"
                                placeholder="Enter details about the task"
                                variant="bordered"
                                value={editingTask.time}
                                onValueChange={(new_time: string) => {setEditingTask({ ... editingTask, time : new_time})}}
                            />
                            <Select 
                                label="Apply a status to this task" 
                                classNames={{base: "max-w-xs bg-[#18181B]",}}
                                defaultSelectedKeys={[editingTask.status]}
                                name="status"
                                onChange={(e: any) => {setEditingTask({ ... editingTask, [e.target.name] : e.target.value})}}
                            >
                                {selectStatus.map((Status) => (
                                <SelectItem key={Status.label} value={Status.label}>
                                    {Status.label}
                                </SelectItem>
                                ))}
                            </Select>
                            <div className="flex py-2 px-1 justify-between">
                                <Checkbox 
                                    classNames={{label: "text-small text-[#fff]",}}
                                    isSelected={editingTask.send_notification} 
                                    onValueChange={(new_send_notify: boolean) => {setEditingTask({ ... editingTask, send_notification : new_send_notify})}}>
                                        Notify me when task is due
                                </Checkbox>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={cleanThisTask}>
                            Remove task
                            </Button>
                            <Button color="warning" variant="flat" onPress={discardThisTask}>
                            Discard
                            </Button>
                            <Button color="secondary" onPress={updateThisTask}>
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