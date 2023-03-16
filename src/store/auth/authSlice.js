import { createSlice } from '@reduxjs/toolkit';
import useToggle from '../../hooks/useToggle';
const initialState = {
  auth: false,
};

export const authSlice = createSlice({
  // The name of our reducer
  name: 'auth',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    login: (state, action) => {
      if (action.payload.pword === 'supersecure') {
        state.auth = true;
      }
    },
    logout: (state) => {
      state.auth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
