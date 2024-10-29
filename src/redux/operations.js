import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSuperheroes = createAsyncThunk(
  "superheroes/fetchSuperheroes",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://superhero-backend-g2ow.onrender.com/superheroes?page=${page}`
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue("Superheroes not found");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
