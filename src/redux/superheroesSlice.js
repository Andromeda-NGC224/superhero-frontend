import { createSlice } from "@reduxjs/toolkit";
import {
  createSuperhero,
  deleteSuperhero,
  fetchOneSuperhero,
  fetchSuperheroes,
  updateSuperhero,
} from "./operations.js";

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
      })
      .addCase(createSuperhero.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createSuperhero.fulfilled, (state, action) => {
        state.isLoading = false;
        state.superheroes.unshift(action.payload);
      })
      .addCase(createSuperhero.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchOneSuperhero.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOneSuperhero.fulfilled, (state, action) => {
        state.isLoading = false;
        state.superheroes = [action.payload];
      })
      .addCase(fetchOneSuperhero.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateSuperhero.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateSuperhero.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedHero = action.payload;
        state.superheroes = state.superheroes.map((hero) =>
          hero._id === updatedHero._id ? updatedHero : hero
        );
      })
      .addCase(updateSuperhero.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteSuperhero.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteSuperhero.fulfilled, (state, action) => {
        state.isLoading = false;
        state.superheroes = state.superheroes.filter(
          (hero) => hero._id !== action.payload._id
        );
      })
      .addCase(deleteSuperhero.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetSuperheroes } = superheroesSlice.actions;
export default superheroesSlice.reducer;
