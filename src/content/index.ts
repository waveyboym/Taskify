import { TASKTYPE, taskType } from "../types";

export function getJSONDate(days_to_add: number) {
        const date = new Date();
        date.setDate(date.getDate() + days_to_add);
        return date.toJSON();
}

export function getDayString(day: number){
        if(day == 1)return "Mon";
        else if(day == 2)return "Tue";
        else if(day == 3)return "Wed";
        else if(day == 4)return "Thu";
        else if(day == 5)return "Fri";
        else if(day == 6)return "Sat";
        else return "Sun";
}

export function getDateColumn(days_to_add: number) {
        const date = new Date();
        date.setDate(date.getDate() + days_to_add);
        return {
                key: getDayString(date.getDay()) + " " + date.getDate().toString(),
                label: getDayString(date.getDay()) + " " + date.getDate().toString()
        };
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