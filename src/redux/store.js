import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  greetings: greetingReducer
})

export default function setupStore(preloadedState){
  return configureStore({
    reducer:rootReducer,
    preloadedState
  })
}