import { TasksTable } from ".";
import RowLabels from './RowLabels';

const TableContainer = () => {
    return (
        <div className="flex w-screen overflow-y-scroll" style={{height: "calc(100vh - 40px)"}}>
            <RowLabels />
            <div style={{width: "calc(100vw - 60px)"}}>
                <div className="flex h-[30px] mt-[5px] mb-[5px] ml-[6px] justify-evenly items-center fixed z-20 bg-white rounded-full"
                    style={{width: "calc(100vw - 90px)"}}>
                    <h2 className="text-gray-500 text-center" style={{width: "calc(100%/4)"}}>Sun 10</h2>
                    <h2 className="text-gray-500 text-center" style={{width: "calc(100%/4)"}}>Mon 11</h2>
                    <h2 className="text-gray-500 text-center" style={{width: "calc(100%/4)"}}>Tue 12</h2>
                    <h2 className="text-gray-500 text-center" style={{width: "calc(100%/4)"}}>Wed 13</h2>
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