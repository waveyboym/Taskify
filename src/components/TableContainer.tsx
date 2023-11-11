import { TasksTable } from ".";
import { getDateColumn } from "../content";
import RowLabels from './RowLabels';

const TableContainer = () => {
    return (
        <div className="flex w-screen overflow-y-scroll" style={{height: "calc(100vh - 40px)"}}>
            <RowLabels />
            <div style={{width: "calc(100vw - 60px)"}}>
                <div className="flex h-[30px] mt-[5px] mb-[5px] ml-[6px] justify-evenly items-center fixed z-20 bg-white rounded-full"
                    style={{width: "calc(100vw - 90px)"}}>
                    <h2 className="text-gray-500 text-center" style={{width: "calc(100%/4)"}}>{getDateColumn(0).label}</h2>
                    <h2 className="text-gray-500 text-center" style={{width: "calc(100%/4)"}}>{getDateColumn(1).label}</h2>
                    <h2 className="text-gray-500 text-center" style={{width: "calc(100%/4)"}}>{getDateColumn(2).label}</h2>
                    <h2 className="text-gray-500 text-center" style={{width: "calc(100%/4)"}}>{getDateColumn(3).label}</h2>
                </div>
                <div className="mt-[40px]">
                    <TasksTable />
                </div>
                <div className="h-[40px]"/>
            </div>
        </div>
    )
}

export default TableContainer