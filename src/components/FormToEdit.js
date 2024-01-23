import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveBook } from "../features/boohSlice";


const FormToEdit = () => {

    let disP=useDispatch();
    let selectedForEdit=useSelector(state=>state.book.selectedBookForEdit)
    let { register, handleSubmit } = useForm({
        defaultValues:selectedForEdit}
    );
    const save = (data) => {
        alert(JSON.stringify(data));
        disP(saveBook(data));
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <label>שם הספר</label>
            <input {...register("name")} />
            <label>מספר העמודים</label>
            <input {...register("numPages")} />
            <label>מחבר הספר</label>
            <input {...register("sofer")} />
            <input type="submit"/>
        </form>
    );
}

export default FormToEdit;