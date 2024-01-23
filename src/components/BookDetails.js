import { useSelector } from "react-redux";


const BookDetails = () => {
    const selectedBook = useSelector(state => state.book.selectedBook);

    return (
        <>
            <div>{selectedBook.name}</div>
            <div>{selectedBook.numPages}</div>
            <div>{selectedBook.sofer}</div>
        </>
    );
};
 export default BookDetails;