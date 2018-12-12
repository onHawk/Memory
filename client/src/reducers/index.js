import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import EntryReducer from './EntryReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  journal: EntryReducer,
});

export default rootReducer;
