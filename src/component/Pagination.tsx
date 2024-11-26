import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Task } from "../store/taskreducer";
import { ListItem } from "./HandleTaskButton";
import {useSearchParams}  from "react-router-dom";
import { nanoid } from 'nanoid';

function Pagination({ total, filterResult }: { total: number; filterResult: Task[] }) {

  const [searchParams, setSearchParams] = useSearchParams();  

  const initialShowTaskPerPage = parseInt(searchParams.get("showTaskPerPage") || "5");
  const initialCurrentPage = parseInt(searchParams.get("currentPage") || "1");

  //const [showTaskPerPage, setShowTaskPerPage] = useState("5");
  //const [currentPage, setCurrentPage] = useState(1);
  const [showTaskPerPage, setShowTaskPerPage] = useState(initialShowTaskPerPage);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);

  const pageCount = Math.ceil(total / Number(showTaskPerPage));
  const pageNumbers = useMemo(() => {
     const result = Array.from({ length: pageCount }, (_, index) => index + 1);
     return result;
  }, [pageCount]);

  const getPaginatedTasks = (): Task[] => {
    const indexOfLastTask = currentPage * Number(showTaskPerPage);
    const indexOfFirstTask = indexOfLastTask - Number(showTaskPerPage);
    return filterResult.slice(indexOfFirstTask, indexOfLastTask);
  };

  function handleSetCurrentPage(page: number) {
    setCurrentPage(page);
  }

  useEffect(() => {
    setSearchParams({ showTaskPerPage: String(showTaskPerPage), currentPage: String(currentPage) });
  }, [showTaskPerPage, currentPage, setSearchParams]);

  useEffect(() => {
    setCurrentPage(1);
  }, [showTaskPerPage]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 text-xs">
      
      <div className={filterResult.length!==0?"mt-2 border-2 pl-4 pt-4 grid grid-rows-5 gap-2 overflow-scroll max-h-96":"mt-2 border-2 pl-4 pt-4 grid grid-rows-5 gap-2 overflow-scroll min-h-96 min-w-full"}>
        <ListItem item={getPaginatedTasks()} />
      </div>

      <div className="flex flex-row gap-2">
        <div className="flex flex-row rounded-md border-gray-400 border-2 p-1 gap-1 max-w-72">
          <div>Show per page</div>
          <select
            value={showTaskPerPage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setShowTaskPerPage(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <div className="flex flex-row gap-1">
          {pageNumbers.map((number) => (
            <ul
              key={nanoid()} 
              onClick={() => handleSetCurrentPage(number)}
              className={
                currentPage === number
                  ? "min-w-12 hover:bg-teal-400 hover:border-teal-400 border-orange-400 rounded-md border-2 px-1 py-1.5 font-bold hover:text-white bg-orange-400  text-white"
                  : "min-w-12 hover:bg-teal-400 hover:border-teal-400 border-gray-400 rounded-md border-2 px-1 py-1.5 font-bold hover:text-white"
              }
            >
              {number}
            </ul>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Pagination;









// import { useState, useRef, useEffect, useMemo, memo} from "react";
// import { Task } from "../store/taskreducer";
// import { nanoid } from 'nanoid'
// import {ListItem} from "./HandleTaskButton"

// function Pagination ({total,filterResult}: {total:number, filterResult: Task[]}){

//     const [showTaskPerPage, setShowTaskPerPage] = useState("5");
//     const [currentPage, setCurrentPage] = useState(1);
//     const pageCount = Math.ceil(total/(Number(showTaskPerPage)));

//     // const previousPage= useRef<number>(1);
//     // useEffect(()=>{
//     //     previousPage.current = currentPage;
//     // }, [currentPage]);

//     function handleSetCurrentPage(currentPage: number){
//         setCurrentPage(currentPage);
//     }

//     useEffect(()=>{
//         setCurrentPage(1);
//     },[showTaskPerPage])

//     const getPaginatedTasks = ():Task[] => {
//         const indexOfLastTask = currentPage * Number(showTaskPerPage);
//         const indexOfFirstTask = indexOfLastTask - Number(showTaskPerPage);
//         return filterResult.slice(indexOfFirstTask, indexOfLastTask);
//     };

// //     const memoizedPaging = useMemo(()=> {
// //         const newArray = [];
// //         for (let i = 1; i < total; i++) {
// //         newArray.push(i);
// //     }
// //     return newArray;
// //   }, [newArray]);
    
//     return (
//         <div className="flex flex-col justify-center items-center gap-4">

//             <div className="flex flex-row gap-2">
//                 <div className=" flex flex-row rounded-md border-black border-2 p-2 gap-4  max-w-72">
//                     <div>Show per page</div>
//                     <select value={showTaskPerPage} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setShowTaskPerPage(e.target.value)} >
//                         <option value="5">5</option>
//                         <option value="10">10</option>
//                         <option value="15">15</option>
//                         <option value="20">20</option>
//                     </select>
//                 </div>

//                 <div className=" flex flex-row gap-2">
//                     {Array.from({length: pageCount},(_,number) =>(
//                         <ul key={nanoid()} onClick={()=>handleSetCurrentPage(number+1)} className={currentPage === number+1?"min-w-12 hover:bg-teal-600 border-teal-400 rounded-md border-2 px-1 py-1.5 font-bold hover:text-white bg-orange-400 text-white":"min-w-12 hover:bg-teal-600 border-teal-400 rounded-md border-2 px-1 py-1.5 font-bold hover:text-white"}>
//                         {number+1}
//                         </ul>
//                     ))} 
//                 </div>

//                 {/* <div className=" flex flex-row gap-2">
//                     {memoizedPaging.map((number) =>(
//                         <ul key={nanoid()} onClick={()=>handleSetCurrentPage(number+1)} className={currentPage === number?"min-w-12 hover:bg-teal-600 border-teal-400 rounded-md border-2 px-1 py-1.5 font-bold hover:text-white bg-orange-400 text-white":"min-w-12 hover:bg-teal-600 border-teal-400 rounded-md border-2 px-1 py-1.5 font-bold hover:text-white"}>
//                         {number}
//                         </ul>
//                     ))} 
//                 </div> */}
//             </div>    

//             <div className="mt-2">
//                 <ListItem item={getPaginatedTasks()} />
//             </div> 
            
//         </div>
//     )
// }
// export default Pagination;
  



