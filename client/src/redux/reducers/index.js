import { combineReducers } from 'redux';

import posts from './posts';

export const rootReducer = combineReducers({ posts }); //combineReducers -> combine all individuals reducer