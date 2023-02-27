import { createSlice, current } from "@reduxjs/toolkit";
import { locations } from './data/locations'
import { news_info } from './data/news_info'
import { provinces } from "./data/provinces";
import { districts } from "./data/districts";
import { subdistricts } from "./data/subdistricts";

const initialState = {
    news_info: news_info,
    locations: locations,
    provinces: provinces,
    districts: districts,
    subdistricts: subdistricts,
    user_current_location: {latitude : 13.751 , longitude : 100.492}
}

const camelonSlice = createSlice({
    name: "newsLocationList",
    initialState,
    reducers: {
        change_current_location: (state, action) => {
            state.user_current_location = action.payload;
        }

    }
})

export const { change_current_location } = camelonSlice.actions
export default camelonSlice.reducer

