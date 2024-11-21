
export function Pagination (){


    return (
        <div className="flex justify-center items-center">
            <div>
        
            </div>
            <div className=" flex flex-row rounded-md border-black border-2 p-2 gap-4  max-w-72">
                <div>Show per page</div>
                <select>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    )
}

