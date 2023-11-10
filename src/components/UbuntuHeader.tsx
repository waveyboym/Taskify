import { useState, useEffect } from "react";
import { UbuntuMinimize, UbuntuMaximize, UbuntuClose } from "../icons";
import { getJSONDate } from "../content";

const UbuntuHeader = () => {
    const [isMaximizedUbuntu, setisMaximizedUbuntu] = useState<boolean>(false);

    useEffect(() => {
        const minimizeID: HTMLElement | null = document.querySelector('.minimize-app-button');
        const ubuntuMU : HTMLElement | null = document.querySelector('.maximize-un-maximize-app-ubuntu');
        const closeID: HTMLElement | null = document.querySelector('.quit-app-button');
    
        const minimize = () => {window.gateway.minimizeWindow();}
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
        const toggleMaximized = () => {
            if(isMaximizedUbuntu === true){
                setisMaximizedUbuntu(false);
                window.gateway.restoreWindow();
            }
            else{
                setisMaximizedUbuntu(true);
                window.gateway.maximizeWindow();
            }
        }

        if(minimizeID)minimizeID.addEventListener('click', minimize);
        if(ubuntuMU)ubuntuMU.addEventListener('click', toggleMaximized);
        if(closeID)closeID.addEventListener('click', close);
        
        return () => {
            if(minimizeID)minimizeID.removeEventListener('click', minimize);
            if(ubuntuMU)ubuntuMU.addEventListener('click', toggleMaximized);
            if(closeID)closeID.removeEventListener('click', close);
        };
    }, [])

    return (
        <div className="flex w-[66px] h-[40px] mr-[12px] items-center overflow-hidden">
            <div className="w-[22px] h-[22px] flex items-center justify-center minimize-app-button hover:bg-[#dbdbdb62] active:bg-[#dbdbdb8a] rounded-full">
                <UbuntuMinimize />
            </div>
            <div className="w-[22px] h-[22px] flex items-center justify-center maximize-un-maximize-app-ubuntu hover:bg-[#dbdbdb62] active:bg-[#dbdbdb8a] rounded-full">
                <UbuntuMaximize />
            </div>
            <div className="w-[22px] h-[22px] flex items-center justify-center quit-app-button hover:bg-[#E95420] active:bg-[#ff7847] rounded-full">
                <UbuntuClose />
            </div>
        </div>
    )
}

export default UbuntuHeader