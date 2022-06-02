import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  userID: number | null;
  isLoading: boolean;
  message: string;
}

const initialState: AuthState = {
  userID: null,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.userID = null;
    },
    loginAction: (state, action) => {
      state.userID = action.payload.id;
    },
  },
});

export const { reset, loginAction } = authSlice.actions;

export default authSlice.reducer;
