import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://127.0.0.1:3000/greetings';

const initialState = {
  greeting: [],
  isLoading: true,
  error: null,
};

export const getGreetingsAsync = createAsyncThunk(
  'greetings/Async',
  async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (e) {
      return e.message;
    }
  },
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder.addCase(getGreetingsAsync.pending, (state) => ({
      ...state,
      isLoading: true,
    })).addCase(getGreetingsAsync.fulfilled, (state, action) => ({
      ...state,
      greeting: action.payload,
      isLoading: false,
    })).addCase(getGreetingsAsync.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
  },
});

export const selectStatus = (state) => state.greetings.isLoading;
export const selectGreetings = (state) => state.greetings.greeting;
export const selectError = (state) => state.greetings.error;

export default greetingSlice.reducer;
