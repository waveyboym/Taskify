import { TasksTable } from "."

const TableContainer = () => {
    return (
        <div className="flex w-fit">
            <div className="w-[60px] mt-[40px] ml-[10px] h-[380px] flex flex-col justify-evenly">
                <h2 className="text-gray-500 h-[70px] pt-[30px]">9am</h2>
                <h2 className="text-gray-500 h-[70px] pt-[30px]">10am</h2>
                <h2 className="text-gray-500 h-[70px] pt-[30px]">11am</h2>
            </div>
            <div>
                <div className="flex h-[40px] w-[888px] justify-evenly">
                    <h2 className="text-gray-500 w-[190px] text-center">Sun 10</h2>
                    <h2 className="text-gray-500 w-[190px] text-center">Mon 11</h2>
                    <h2 className="text-gray-500 w-[190px] text-center">Tue 12</h2>
                    <h2 className="text-gray-500 w-[190px] text-center">Wed 13</h2>
                </div>
                <TasksTable />
            </div>
        </div>
    )
}

export default TableContainer