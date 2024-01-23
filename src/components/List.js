import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const List = () => {
    let arr=useSelector(myState=>myState.book.arr);
    return (<>
    רשימת הספרים שלך
    <ul>
     {arr.map(item=><li key={item.id}>
        <ListItem myBook={item}/>
     </li>)}
     </ul>
    </> );
}
 
export default List;