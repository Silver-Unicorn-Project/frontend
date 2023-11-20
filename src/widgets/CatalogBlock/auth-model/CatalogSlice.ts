import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _QUERY } from "shared/api/apiTypes";

export const getProducts = async () => {
  const response = await fetch(`${_QUERY}api/request-for-categories/products/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
}

export const getApiData = createAsyncThunk(
  'api/products',
  async () => {
    const response = await getProducts();
    return response;
  }
);

export interface IProduct {
  id: number;
  title: string;
}

export interface ICatalogState {
  product: IProduct[];
  loading: boolean;
  error: string | unknown;
}

const initialState: ICatalogState = {
  product: [],
  loading: false,
  error: '',
}

export const CatalogSlice = createSlice<ICatalogState,NonNullable<unknown>>({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApiData.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.product = action.payload;
        state.error = '';
      })
      .addCase(getApiData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getApiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
}) 