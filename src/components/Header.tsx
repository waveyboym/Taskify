import { FunctionComponent, useEffect, useState } from "react";
import { OSTYPE } from "../types";
import { UbuntuClose, UbuntuMaximize, UbuntuMinimize, WindowsCloseIcon, WindowsMaximizeIcon, WindowsMinimizeIcon, WindowsRestoreIcon } from "../icons";

type HeaderProps = {
    set_OS_supported_state: (set_to: boolean) => void;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
    const [ostype, setOSType] = useState<OSTYPE>(OSTYPE.null);
    const [isMaximizedUbuntu, setisMaximizedUbuntu] = useState<boolean>(false);

    useEffect(() => {
        const minimizeID: HTMLElement | null = document.querySelector('.minimize-app-button');
        const maximizeID: HTMLElement | null = document.querySelector('.maximize-app-button');
        const restoreID: HTMLElement | null = document.querySelector('.restore-app-button');
        const closeID: HTMLElement | null = document.querySelector('.quit-app-button');
        const ubuntuMU : HTMLElement | null = document.querySelector('.maximize-un-maximize-app-ubuntu');

        const checkOSType = async() => {
            const osType = window.gateway.osType;
            if(osType === OSTYPE.darwin){
                setOSType(OSTYPE.darwin);
                props.set_OS_supported_state(true);
            }
            else if(osType === OSTYPE.linux){
                setOSType(OSTYPE.linux);
                props.set_OS_supported_state(true);
            }
            else if(osType === OSTYPE.win32){
                setOSType(OSTYPE.linux);
                //setOSType(OSTYPE.win32);
                props.set_OS_supported_state(true);
            }
            else {
                props.set_OS_supported_state(false);
            }
        }
    
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
        const close = () => {window.gateway.closeWindow();}
        const toggleMaximized = () => {
            if(isMaximizedUbuntu === true){
                console.log("here");
                setisMaximizedUbuntu(false);
                window.gateway.restoreWindow();
            }
            else{
                setisMaximizedUbuntu(true);
                window.gateway.maximizeWindow();
            }
        }

        checkOSType();
        window.addEventListener("resize", handleScreenResize);
        if(minimizeID)minimizeID.addEventListener('click', minimize);
        if(maximizeID)maximizeID.addEventListener('click', maximize);
        if(restoreID)restoreID.addEventListener('click', restore);
        if(closeID)closeID.addEventListener('click', close);
        if(ubuntuMU)ubuntuMU.addEventListener('click', toggleMaximized);
        

        return () => {
            window.removeEventListener("resize", handleScreenResize);
            if(minimizeID)minimizeID.removeEventListener('click', minimize);
            if(maximizeID)maximizeID.removeEventListener('click', maximize);
            if(restoreID)restoreID.removeEventListener('click', restore);
            if(closeID)closeID.removeEventListener('click', close);
            if(ubuntuMU)ubuntuMU.addEventListener('click', toggleMaximized);
        };
    }, [])
    
    return (
        <div className={"w-100 h-[40px] flex justify-between header " + (ostype === OSTYPE.linux ? "bg-[#2C2C2C] border border-solid border-[#585858]" : "")}>
            {
                ostype === OSTYPE.darwin ?
                <div>

                </div>
                :
                <div />
            }
            {
                ostype === OSTYPE.linux ?
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
                : 
                ostype === OSTYPE.win32 ?
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
                :
                <div />
            }
        </div>
    )
}

export default Header