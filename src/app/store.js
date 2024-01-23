import { configureStore } from "@reduxjs/toolkit";
import boohSlice from "../features/boohSlice";

//זה המקום שבעצם מאחד את כל חלקי הסטייט הכללי
export const store = configureStore({
    reducer: {//כאן הפירוט של כל רדיוסר-חלק מהסטייט
        //באמיתי יהיו פה עוד חלקים
        book: boohSlice
    }
})