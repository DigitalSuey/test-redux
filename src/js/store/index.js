import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from "../middleware";
import { configureStore, getDefaultMiddleware, compose } from 'redux-starter-kit';

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), forbiddenWordsMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [ compose ],
});
