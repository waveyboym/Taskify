import { TASKTYPE, taskType } from "../types";

export function getJSONDate(days_to_add: number) {
        const date = new Date();
        date.setDate(date.getDate() + days_to_add);
        return date.toJSON();
}

export const selectStatus : {label: TASKTYPE}[] = [
        {label: TASKTYPE.null},
        {label: TASKTYPE.incomplete},
        {label: TASKTYPE.complete},
        {label: TASKTYPE.hold}
]

export const tasksEmpty: taskType[] = [
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(0),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(1),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(2),
                send_notification: false
        },
        {
                status: TASKTYPE.null,
                text: "",
                time: getJSONDate(3),
                send_notification: false
        }
]