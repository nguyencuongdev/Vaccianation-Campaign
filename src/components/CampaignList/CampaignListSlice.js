import { createSlice } from '@reduxjs/toolkit';

const CampaignListSlice = createSlice({
    name: 'campaignList',
    initialState: [],
    reducers: {
        storeCampaigns: (state, action) => {
            state = action.payload;
            return state;
        },
    }
})

export default CampaignListSlice;
export const campaignListActions = CampaignListSlice.actions;
export const campaignListReducer = CampaignListSlice.reducer;