import { useState, useRef, useEffect } from "react"
import { Task } from "../store/taskreducer";
import { nanoid } from 'nanoid'
import {ListItem} from "./HandleTaskButton"

export function Pagination ({total,filterResult}: {total:number, filterResult: Task[]}){

    const [showTaskPerPage, setShowTaskPerPage] = useState("5");
    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = Math.ceil(total/(Number(showTaskPerPage)));

    // const previousPage= useRef<number>(1);

    // useEffect(()=>{
    //     previousPage.current = currentPage;
    // }, [currentPage]);

    //const filterPagingResult2: Task[]= filterResult.slice(1*10, (1 + 1)*10);
    //const filterPagingResult2: Task[]= filterResult.slice(currentPage*total, (currentPage + 1)*total);
    // const showData: Task[] = filterPagingResult2;
    // console.log(" showData is "+ showData);
    function handleSetCurrentPage(currentPage: number){
        setCurrentPage(currentPage);
        // previousPage.current = currentPage;
        // if(currentPage >= Number(previousPage) ){
        //     setCurrentPage(Math.min(currentPage + 1, pageCount - 1));          
        //     console.log("increment");
        // }else if (currentPage < Number(previousPage)){
        //     setCurrentPage(Math.max(currentPage - 1, 0));
        //     console.log("decrement");
        // }
        //const filterPagingResult = filterResult.slice(currentPage*total, (currentPage + 1)*total);
        //const filterPagingResult2 = filterResult.slice(1*1, (1 + 1)*1);
        //console.log({filterResult, currentPage, filterPagingResult, previousPage});
    }

    const getPaginatedTasks = () => {
        const indexOfLastTask = currentPage * Number(showTaskPerPage);
        const indexOfFirstTask = indexOfLastTask - Number(showTaskPerPage);
        return filterResult.slice(indexOfFirstTask, indexOfLastTask);
    };
    
    return (
        <div className="flex flex-col justify-center items-center gap-2">

            <div className="flex flex-row">
                <div className=" flex flex-row rounded-md border-black border-2 p-2 gap-4  max-w-72">
                    <div>Show per page</div>
                    <select value={showTaskPerPage} onChange={(e:any)=>setShowTaskPerPage(e.target.value)} >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

                <div className=" flex flex-row border-black rounded-sm border-2">
                    {Array.from({length: pageCount},(_,number) =>(
                        <ul key={nanoid()} onClick={()=>handleSetCurrentPage(number+1)} className="min-w-12 hover:bg-teal-200 border-black rounded-sm border-2 p-1 font-bold">
                        {number+1}
                        </ul>
                    ))} 
                </div>

            </div>    

            <div className="mt-2">
                <ListItem item={getPaginatedTasks()} />
            </div> 

        </div>
    )
}

{/* <div className="border-black border-8"><ul>
            {getPaginatedTasks().map((task: Task) => (
                <li key={task.id}>
                    <h3>{task.text}</h3>
                </li>
            ))}
            </ul></div> */}

// function ShowPagingTask({taskList}: Task[]){
//     return (
//         <ul>
//           {taskList.map((task: Task) => (
//             <li key={task.id}>
//               <h3>{task.text}</h3>
//             </li>
//           ))}
//         </ul>
//       );
//     }

//    


