import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileState, EachProfile } from "@/redux/allTypes";

const initialState: ProfileState = {
  profiles: [],
};

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<EachProfile>) => {
      const newProfile = action.payload;
      state.profiles = [...state.profiles, newProfile];
    },
    deleteProfile: (state, action: PayloadAction<number>) => {
      const profileId = action.payload;
      state.profiles = state.profiles.filter(
        (eachProfile) => eachProfile.id !== profileId
      );
    },
  },
});

export const { addProfile, deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;
