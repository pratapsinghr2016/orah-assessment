import { configureStore } from "@reduxjs/toolkit";
import homeBoardSlice from "staff-app/daily-care/daily-care.slice";
import activitySlice from "staff-app/platform/activity.page.slice";

export const store = configureStore({
  reducer: {
    students: homeBoardSlice,
    activities: activitySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
