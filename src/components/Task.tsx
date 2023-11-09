import { Card, CardHeader, Chip, CardBody } from "@nextui-org/react";
import { FunctionComponent } from "react"
import { TASKTYPE, taskType } from "../types";

type TaskProps = {
    task: taskType;
    row_index: number;
    cell_index: number;
    overWriteThisTask: (row_index: number, cell_index: number, data: taskType) => void;
}

const Task: FunctionComponent<TaskProps> = (props: TaskProps) => {
    return (
        <div>
            {
                props.task.status === TASKTYPE.null ? 
                    <Card className="w-[190px] h-[100px] rounded-[30px]" isPressable onPress={() => props.overWriteThisTask(props.row_index, props.cell_index, props.task)}>
                        <CardHeader className="flex gap-3">
                            <Chip color="default" variant="faded">no task</Chip>
                        </CardHeader>
                        <CardBody>
                            <p>no task is scheduled</p>
                        </CardBody>
                    </Card>
                :
                <Card className="w-[190px] h-[100px] rounded-[30px]" isPressable>
                    <CardHeader className="flex gap-3">
                        {
                            props.task.status === TASKTYPE.incomplete ?
                                <Chip color="secondary" variant="faded">Incomplete</Chip>
                            :
                            props.task.status === TASKTYPE.complete ?
                                <Chip color="success" variant="solid">Completed</Chip> 
                            :
                                <Chip color="warning" variant="flat">On hold</Chip>
                        }
                    </CardHeader>
                    <CardBody>
                        <p>{props.task.status}</p>
                    </CardBody>
                </Card>
        }
        </div>
    )
}

export default Task