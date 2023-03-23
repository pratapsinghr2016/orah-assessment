import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getActivities } from "api/get-activities";
import { Person } from "shared/models/person";

interface ActivityState {
  activities: [Person] | [];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: ActivityState = {
  activities: [],
  isLoading: false,
  hasError: false,
};

export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  async () => {
    try {
      const response = await getActivities();
      return response;
    } catch (err) {
      console.error("Err: ", err);
    }
    return [];
  }
);

export const activityPageSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchActivities.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchActivities.fulfilled, (state, { payload }: any) => {
        state.isLoading = false;
        state.activities = payload.activities;
      })
      .addCase(fetchActivities.rejected, (state, _) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const getAllActivities = (state: any) => state.activities;

export default activityPageSlice.reducer;
