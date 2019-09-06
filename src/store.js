import { createStore, combineReducers, applyMiddleware } from 'redux';
import themeSelector from './redux/reducers/ThemeEditor';
import thunk from 'redux-thunk';

const reducers = combineReducers(
  {
    themeSelector
  }
);

const middleware = applyMiddleware(thunk)

export default createStore(reducers, middleware)