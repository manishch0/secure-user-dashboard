import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  id: number;
  data: string;
}

interface DataState {
  userData: UserData | null;
}

const initialState: DataState = {
  userData: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = dataSlice.actions;
export default dataSlice.reducer;
