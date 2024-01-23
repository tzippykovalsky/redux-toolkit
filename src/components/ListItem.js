import { useDispatch } from "react-redux";
import { deleteBook, selectBookForEdit ,selectBook} from "../features/boohSlice";



const ListItem = ({ myBook }) => {
  let disPatch = useDispatch()//  אחראי לשלוח לרדיוסר
  return (<>
    <div>{myBook.name}</div>
    <input type="button" onClick={()=>{disPatch(deleteBook(myBook.id))}} value="מחק" />
    <input type="button" onClick={()=>{disPatch(selectBookForEdit(myBook))}} value="ערוך שיר" />
    <input type="button" onClick={()=>{disPatch(selectBook(myBook))}} value="הצג פרטים נוספים" />
  </>
  );
}

export default ListItem;