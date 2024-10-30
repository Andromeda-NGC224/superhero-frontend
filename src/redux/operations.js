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

export const fetchOneSuperhero = createAsyncThunk(
  "superheroes/fetchOneSuperhero",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://superhero-backend-g2ow.onrender.com/superheroes/${id}`
      );
      return response.data.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue("Superhero not found");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createSuperhero = createAsyncThunk(
  "superheroes/createSuperhero",
  async (superheroData, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://superhero-backend-g2ow.onrender.com/superheroes`,
        superheroData
      );
      return response.data.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue("Superhero was not created");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateSuperhero = createAsyncThunk(
  "superheroes/updateSuperhero",
  async ({ id, superheroData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `https://superhero-backend-g2ow.onrender.com/superheroes/${id}`,
        superheroData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue("Superhero was not updated");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteSuperhero = createAsyncThunk(
  "superheroes/deleteSuperhero",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://superhero-backend-g2ow.onrender.com/superheroes/${id}`
      );
      return response.data.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue("Superhero not found");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
