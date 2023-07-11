import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = '/greetings'

const initialState = {
  greeting: [],
  isLoading: true,
  error: null
}

export const getGreetingsAsync = createAsyncThunk(
  'greetings/Async',
  async()=>{
    try{
      const res = await fetch(url)
      const data = await res.json()
      return data
    }catch(e){
      return e.message
    }
  }
)

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder){
    builder.addCase
  }
})