import { State } from './../type.d';
import {
  createEntityAdapter,
  createSlice,
  configureStore
} from '@reduxjs/toolkit'

export interface Book {
  id: string,
  title: string
}

const booksAdapter = createEntityAdapter({
  selectId: (book: Book) => book.id,
  sortComparer: (a, b) => parseInt(b.id) - parseInt(a.id)
});




const booksSlice = createSlice({
  name: 'bookd',
  initialState: booksAdapter.getInitialState(),
  reducers: {
    bookAdded: booksAdapter.addOne,
    bookRemoved: booksAdapter.removeOne,
    booksReceived(state, action) {
      booksAdapter.setAll(state, action.payload.books);
    }
  }
})


export const booksSelectors = booksAdapter.getSelectors((state: State) => state.books);

export const { bookAdded, bookRemoved } = booksSlice.actions;


export default booksSlice.reducer;
