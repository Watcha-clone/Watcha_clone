import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
};

const searchSlice = createSlice({
  name: "search_keyword",
  initialState,
  reducers: {
    search: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default searchSlice;
export const { search } = searchSlice.actions;
