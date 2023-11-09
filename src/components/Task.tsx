import { Card, CardHeader, Chip, CardBody } from "@nextui-org/react";
import { FunctionComponent } from "react"
import { TASKTYPE } from "../types";

type TaskProps = {
    status: string;
    text: string;
}

const Task: FunctionComponent<TaskProps> = (props: TaskProps) => {
    return (
        <div>
            {
                props.status === TASKTYPE.null ? 
                    <Card className="w-[190px] h-[100px] rounded-[30px]" isPressable>
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
                            props.status === TASKTYPE.incomplete ?
                                <Chip color="secondary" variant="faded">Incomplete</Chip>
                            :
                            props.status === TASKTYPE.complete ?
                                <Chip color="success" variant="solid">Completed</Chip> 
                            :
                                <Chip color="warning" variant="flat">On hold</Chip>
                        }
                    </CardHeader>
                    <CardBody>
                        <p>{props.text}</p>
                    </CardBody>
                </Card>
        }
        </div>
    )
}

export default Task