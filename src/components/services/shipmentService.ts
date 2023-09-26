import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const shipmentAsync = createAsyncThunk(
    'shipment/shipmentAsync',
    async () => {
      //const response = await axios.get('http://localhost:5000/shipments');
      const response = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
      return response.data;
    }
  );
 
 