import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Checkbox, Select, SelectItem} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from "@nextui-org/react";
import Task from "./Task";
import { useEffect, useState } from "react";
import { useTaskStore } from "../store";
import { TASKTYPE, taskType } from "../types";
import { getDateColumn, getJSONDate, selectStatus, tasksEmpty } from "../content";

const columns = [getDateColumn(0),getDateColumn(1),getDateColumn(2),getDateColumn(3)]

const columns_num = [0, 1, 2, 3]

const row_keys = ["0am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]

interface co_ords{ row: number; col: number;}

const TasksTable = () => {
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const [editingTask, setEditingTask] = useState<taskType>({ status: TASKTYPE.null, text: "", time: getJSONDate(0), send_notification: false});
    const { tasks, overwriteTask, setTasks } = useTaskStore();
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

    function getDifferenceInDays(date1: Date, date2: Date) {
        const diffInMS: number = Math.abs(date2.getTime() - date1.getTime());
        return Math.floor(diffInMS / (1000 * 60 * 60 * 24));
    }

    function initTasksData(parsed: any){
        const now = new Date();
        const last_edited_date = new Date(parsed.last_date_edited);
        const days_passed = getDifferenceInDays(now, last_edited_date);
        if(days_passed >= 4){
            setTasks(tasksEmpty);
        }
        else{
            const array_data: taskType[] = parsed.store;
            for(let i = 0; i < days_passed; ++i){
                //remove first element
                array_data.shift();
                //push null type last element
                array_data.push({ status: TASKTYPE.null, text: "", time: getJSONDate(0), send_notification: false});
                let skip_to = 3;
                for(let j = 0; j < 24; ++j){
                    //only modify the last column, so everything in index 3, 7, 11 and so on
                    array_data[j + skip_to] = { status: TASKTYPE.null, text: "", time: getJSONDate(0), send_notification: false};
                    skip_to += 3;
                }
            }
            setTasks(array_data);
        }
    }

    function scrollCorrectHourIntoView(){
        const hours = new Date().getHours();
        let select = "";
        if(hours == 12)select = "12pm";
        else{
            const h = hours % 12;
            select = h.toString() + (hours > 12 && hours !== 24 ? "pm" : "am");
        }
        document.getElementById(select)?.scrollIntoView({behavior: "smooth", });
    }

    useEffect(() => {
        const loadData = () => {
            window.gateway.readData().
            then((res) => {
                const parsed = JSON.parse(res);
                initTasksData(parsed);
                scrollCorrectHourIntoView();
            }).
            catch((error) => {
                console.log(error);
            });
        }

        loadData();
    }, [])
    
    return (
        <>
            <Table hideHeader 
            aria-label="Tasks table"
            classNames={{wrapper: "min-h-[222px] rounded-[35px] w-full",}}>
                <TableHeader>
                    {columns.map((column) =>
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                    )}
                </TableHeader>
                <TableBody>
                    {row_keys.map((key_value, index) => 
                        <TableRow key={key_value} id={key_value}>
                            {
                                columns_num.map((column_value) => 
                                        <TableCell key={calculateCellIndex(index, column_value)}>
                                            {tasks.length === 96 ? 
                                                <Task 
                                                    task={tasks[calculateCellIndex(index, column_value)]} 
                                                    row_index={index} 
                                                    cell_index={column_value} 
                                                    overWriteThisTask={overWriteThisTask}/>
                                            : (<div />)}
                                        </TableCell>
                                    )
                            }
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