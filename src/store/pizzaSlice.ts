import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: [
    {
      name: "Pepperoni",
      count: 1,
    },
    {
      name: "Anchoveeees (ew)",
      count: 0,
    },
    {
      name: "MyBalls",
      count: 0,
    },
  ],
  gluten: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },
    addTopping: (state: any, action) => {
      if (!state.toppings.find((el: any) => el.name === action.payload))
        throw new Error("Invalid name");

      state.toppings.find((el: any) => el.name === action.payload).count++;
    },
  },
});

export const { toggleGluten, addTopping } = pizzaSlice.actions;

export default pizzaSlice.reducer;
