import { FunctionComponent, useEffect, useState } from "react";
import { OSTYPE } from "../types";
import UbuntuHeader from "./UbuntuHeader";
import WindowHeader from "./WindowHeader";
import MacHeader from "./MacHeader";

type HeaderProps = {
    set_OS_supported_state: (set_to: boolean) => void;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
    const [ostype, setOSType] = useState<OSTYPE>(OSTYPE.null);

    useEffect(() => {
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
                setOSType(OSTYPE.win32);
                props.set_OS_supported_state(true);
            }
            else {
                props.set_OS_supported_state(false);
            }
        }

        checkOSType();
    }, [])
    
    return (
        <div className={"w-100 h-[40px] flex justify-between items-center header " + (ostype === OSTYPE.linux ? "bg-[#2C2C2C] border border-solid border-[#585858] rounded-t-[8px]" : "")}>
            {
                ostype === OSTYPE.darwin ?
                <MacHeader />
                :
                ostype === OSTYPE.win32 ?
                <h1 className="ml-[20px]">Taskify</h1>
                :
                <div className={(ostype === OSTYPE.linux ? "w-[66px]" : "")}/>
            }
            {
                ostype !== OSTYPE.win32 && (<h1>Taskify</h1>)
            }
            {
                ostype === OSTYPE.linux ?
                <UbuntuHeader />
                : 
                ostype === OSTYPE.win32 ?
                <WindowHeader />
                :
                <div className={(ostype === OSTYPE.darwin ? "w-[64px]" : "")}/>
            }
        </div>
    )
}

export default Header