import { Task } from "../store/taskreducer";
/*export function filterItem (items: Task[], query: string){
    let queryLower = query.toLowerCase();
    return items.filter((item: any)=>item.text.split(' ').some((word: any)=>word.toLowerCase().includes(queryLower)));
  }

  export function filterRadioButton(items: Task[], typeFilter: string): Task[]{
    return items.filter((item: Task) => {
    if (typeFilter === "All") return true;
    if (typeFilter === "Done") return item.completed;
    if (typeFilter === "Undone") return !item.completed;
    return true;
    })
  }*/

  /*export function mergeFilter (filterItem: Task[], filterRadioButton: Task[]){
    const mergeFilterResult = filterItem.concat(filterRadioButton.filter(
      itemRadio => !filterItem.some(itemFilter => itemFilter.id === itemRadio.id)));

      console.log ({filterItem});
      console.log({filterRadioButton});
      console.log({mergeFilterResult});
      return mergeFilterResult;
    
    console.log("1" + filterRadioOnly)
    console.log("2" +filteredItems)
    console.log("3 Radio By query" +filterRadioByQuery)
    console.log("4 Query By radio" +filterQueryByRadio)
  }*/

export function filterItem(items: Task[], query: string, typeFilter: string): Task[] {

    // Filter by query only
    let queryLower = query.toLowerCase();
    let filteredItems = items.filter((item: Task) =>
        item.text.split(' ').some((word: string) => word.toLowerCase().includes(queryLower))
    );

    // Filter by radio button only
    let filterRadioOnly =items.filter((item: Task) => {
      if (typeFilter === "All") return true;
      if (typeFilter === "Done") return item.completed;
      if (typeFilter === "Undone") return !item.completed;
      return true;
      })
    
    // Filter by query then by radio button
    let filterRadioByQuery = filteredItems.filter((item: Task) => {
      if (typeFilter === "All") return true;
      if (typeFilter === "Done") return item.completed;
      if (typeFilter === "Undone") return !item.completed;
      return true;
    })
    
    // Filter by radio button then by query
    let queryLowerCase = query.toLowerCase();
    let filterQueryByRadio = filterRadioByQuery.filter((item: Task) =>
    item.text.split(' ').some((word: string) => word.toLowerCase().includes(queryLowerCase))
    );
    
    if( filteredItems.length == 0 && filterRadioOnly.length == 0){
        return items;
    }else if((filteredItems.length !== 0 && filterRadioOnly.length == 0)||(filteredItems.length !== 0 && filterRadioOnly.length !== 0)){
        return filterRadioByQuery;
    }else if(filteredItems.length == 0 && filterRadioOnly.length !== 0){
      return filterQueryByRadio;
    }
}


  