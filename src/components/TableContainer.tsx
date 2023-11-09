import { TasksTable } from "."
import RowLabels from './RowLabels';

const TableContainer = () => {
    return (
        <div className="flex w-fit overflow-y-scroll" style={{height: "calc(100vh - 40px)"}}>
            <RowLabels />
            <div>
                <div className="flex h-[40px] w-[888px] justify-evenly fixed z-20">
                    <h2 className="text-gray-500 w-[190px] text-center">Sun 10</h2>
                    <h2 className="text-gray-500 w-[190px] text-center">Mon 11</h2>
                    <h2 className="text-gray-500 w-[190px] text-center">Tue 12</h2>
                    <h2 className="text-gray-500 w-[190px] text-center">Wed 13</h2>
                </div>
                <div className="mt-[40px]">
                    <TasksTable />
                </div>
            </div>
        </div>
    )
}

export default TableContainer