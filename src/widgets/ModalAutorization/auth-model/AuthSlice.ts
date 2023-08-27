import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {_QUERY} from "shared/api/apiTypes";
import {RootState} from "shared/consts/store";

const postUser = async (userData: IUser) => {
  const response = await fetch(`${_QUERY}api/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
};

export const postApiData = createAsyncThunk<IUser, any, object>('api/post', async (userData: any) => {
  const response = await postUser(userData);
  return response;
});

interface IUser {
  username: string;
  email: string;
  password: string;
}


interface IAuthState {
  user: IUser;
  loading: boolean;
  error: string | null;
}
const initialState: IAuthState = {
  user: {
    username: '',
    email: '',
    password: '',
  },
  loading: false,
  error:null ,
};
const authSlice = createSlice<IAuthState,NonNullable<unknown>,"auth">({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postApiData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postApiData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload };
        state.error = null;
      })
      .addCase(postApiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});



export default authSlice.reducer;