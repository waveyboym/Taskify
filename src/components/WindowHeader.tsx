import { useEffect } from "react";
import { WindowsMinimizeIcon, WindowsRestoreIcon, WindowsMaximizeIcon, WindowsCloseIcon } from "../icons"
import { getJSONDate } from "../content";
//import { useTaskStore } from "../store";

const WindowHeader = () => {
    //const { tasks } = useTaskStore((state) => { return { tasks: state.tasks, }; });

    useEffect(() => {
        const minimizeID: HTMLElement | null = document.querySelector('.minimize-app-button');
        const maximizeID: HTMLElement | null = document.querySelector('.maximize-app-button');
        const restoreID: HTMLElement | null = document.querySelector('.restore-app-button');
        const closeID: HTMLElement | null = document.querySelector('.quit-app-button');
    
        const handleScreenResize = async() => {
            const isMaximized: boolean = await window.gateway.isWindowMaximized();
            if(isMaximized === true){
                const maximize_btn: HTMLElement | null = document.querySelector('.maximize-app-button');
                const restore_btn: HTMLElement | null = document.querySelector('.restore-app-button');

                if(maximize_btn)maximize_btn.style.display = "none";
                if(restore_btn)restore_btn.style.display = "flex";
            }
            else{
                const maximize_btn: HTMLElement | null = document.querySelector('.maximize-app-button');
                const restore_btn: HTMLElement | null = document.querySelector('.restore-app-button');
        
                if(maximize_btn)maximize_btn.style.display = "flex";
                if(restore_btn)restore_btn.style.display = "none";
            }
        }

        const minimize = () => {window.gateway.minimizeWindow();}
        const maximize = () => {window.gateway.maximizeWindow();}
        const restore = () => {window.gateway.restoreWindow();}
        const close = () => {
            const string_tasks = localStorage.getItem('tasks-store');
            const tasks = JSON.parse(string_tasks !== null ? string_tasks : "");
            const json = {
                last_date_edited: getJSONDate(0),
                store: tasks.state.tasks
            };
            window.gateway.saveData(JSON.stringify(json));
            window.gateway.closeWindow();
        }

        window.addEventListener("resize", handleScreenResize);
        if(minimizeID)minimizeID.addEventListener('click', minimize);
        if(maximizeID)maximizeID.addEventListener('click', maximize);
        if(restoreID)restoreID.addEventListener('click', restore);
        if(closeID)closeID.addEventListener('click', close);
        

        return () => {
            window.removeEventListener("resize", handleScreenResize);
            if(minimizeID)minimizeID.removeEventListener('click', minimize);
            if(maximizeID)maximizeID.removeEventListener('click', maximize);
            if(restoreID)restoreID.removeEventListener('click', restore);
            if(closeID)closeID.removeEventListener('click', close);
        };
    }, [])

    return (
        <div className="flex w-[120px] h-[40px] overflow-hidden">
            <div className="w-[40px] h-[40px] flex items-center justify-center minimize-app-button hover:bg-[#dbdbdb62] active:bg-[#dbdbdb8a] rounded-[15px]">
                <WindowsMinimizeIcon />
            </div>
            <div className="w-[40px] h-[40px] items-center justify-center restore-app-button hover:bg-[#dbdbdb62] active:bg-[#dbdbdb8a] rounded-[15px]">
                <WindowsRestoreIcon />
            </div>
            <div className="w-[40px] h-[40px] items-center justify-center maximize-app-button hover:bg-[#dbdbdb62] active:bg-[#dbdbdb8a] rounded-[15px]">
                <WindowsMaximizeIcon />
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center quit-app-button hover:bg-[#ff6868] active:bg-[red] rounded-[15px]">
                <WindowsCloseIcon />
            </div>
        </div>
    )
}

export default WindowHeader