import { combineReducers } from "@reduxjs/toolkit";

import app from "src/slices/appSlice";

export const reducers = combineReducers({
    app: app
});

export type RootState = ReturnType<typeof reducers>

