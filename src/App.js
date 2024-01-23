import './App.css';
import List from './components/List';
import BookDetails from './components/BookDetails';
import { useSelector } from 'react-redux';
import FormToEdit from './components/FormToEdit';

function App() {
  let selected = useSelector(state => state.book.selectedBook)
  let selectedForEdit = useSelector(state => state.book.selectedBookForEdit)
  return (<>

    <List />
    {selected && <BookDetails />}
    {selectedForEdit && <FormToEdit />}
  </>
  );
}

export default App;
