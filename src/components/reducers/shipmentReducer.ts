import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { shipmentinterface, shipstatusinterface } from "../shipmentsInterface";
import { shipmentAsync } from "../services/shipmentService";


const initialState: shipstatusinterface={
  shipmentdetails:[],
  status: 'idle',
}

export const shipmentSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    removeData:(state,action: PayloadAction<string>)=>{
      state.shipmentdetails=state.shipmentdetails.filter(n=>n.orderNo!==action.payload)
    },
    saveData:(state,action: PayloadAction<shipmentinterface>)=>{
     const index=state.shipmentdetails.findIndex(f=>f.orderNo===action.payload.orderNo)
     state.shipmentdetails=[...state.shipmentdetails.slice(0,index), action.payload , ...state.shipmentdetails.slice(index+1)]
     
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(shipmentAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(shipmentAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.shipmentdetails= action.payload;
      })
      .addCase(shipmentAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
export const { removeData,saveData } = shipmentSlice.actions;
export default shipmentSlice.reducer;