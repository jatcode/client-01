import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './reducer_post';

//here I'm actually creating the state of this chunk in the app 
//So there will be a books property within the state and I'm 
//setting it to the value of BooksReducer

const rootReducer = combineReducers({	
	posts: PostReducer,
	form: formReducer
});

export default rootReducer;

