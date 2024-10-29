import { createSlice } from "@reduxjs/toolkit";
import { fetchSuperheroes } from "./operations.js";

const initialState = {
  superheroes: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  hasNextPage: false,
  hasPreviousPage: false,
  perPage: 5,
  totalItems: 0,
};

const superheroesSlice = createSlice({
  name: "superheroes",
  initialState,
  reducers: {
    resetSuperheroes: (state) => {
      state.superheroes = [];
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuperheroes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSuperheroes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.superheroes = [
          ...state.superheroes,
          ...action.payload.data.superheroes,
        ];
        state.currentPage = action.payload.data.page;
        state.totalPages = action.payload.data.totalPages;
        state.hasNextPage = action.payload.data.hasNextPage;
        state.hasPreviousPage = action.payload.data.hasPreviousPage;
        state.perPage = action.payload.data.perPage;
        state.totalItems = action.payload.data.totalItems;
      })
      .addCase(fetchSuperheroes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetSuperheroes } = superheroesSlice.actions;
export default superheroesSlice.reducer;
