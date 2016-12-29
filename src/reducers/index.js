import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//here I'm actually creating the state of this chunk in the app 
//So there will be a books property within the state and I'm 
//setting it to the value of BooksReducer
const rootReducer = combineReducers({
	books: BooksReducer
});

export default rootReducer;

