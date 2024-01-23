import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    arr: [{ id: 1, name: "היום האחרון", sofer: "יונה ספיר", numPages: 460 },
    { id: 2, name: "איסטרק", sofer: "א קווין", numPages: 700 },
    { id: 3, name: "21 בבית 1", sofer: "רפפורט", numPages: 150 },
    { id: 4, name: "חובת הלבבות", sofer: "רבינו בחיי", numPages: 400 }
    ],
    selectedBook: null,
    selectedBookForEdit: null
}

//כל חלק מהסטייט הכללי יהיה בדף נפרד
//initialState הוא כביכול חלק מסטייט כללי
//כל חתיכה מהסטייט הכללי תטופל בצורה הבאה
const bookSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {//איזה פעולות יכולות לשנות את הסטייט הכללי
      
        addBook: (state, action) => {
            state.arr = [...state.arr, action.payload];
          },
        selectBook: (state, action) => {
            state.selectedBook = action.payload;
        },
        selectBookForEdit: (state, action) => {
            state.selectedBookForEdit = action.payload
        },
        deleteBook: (state, action) => {
            state.arr = state.arr.filter(item => item.id !== action.payload);
        },
        saveBook: (state, action) => {
            state.selectedBookForEdit = null;
            state.arr = state.arr.map(item => {
                if (item.id !== action.payload.id)
                    return item;
                return action.payload;
            })
        }

    }
})

export const { addBook, selectBook, selectBookForEdit, deleteBook, saveBook } = bookSlice.actions;//שהוא בנה actions מתאים מאחורה ומה שייצאתי כאן זה הaction לכל רדיוסר הוא בונה 
//כשאשתמש בהם הוא לבד ידע להביא אותי לרדיוסר המתאים
export default bookSlice.reducer;