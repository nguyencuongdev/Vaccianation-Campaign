
import { configureStore } from '@reduxjs/toolkit';
import { campaignListReducer } from '~/components/CampaignList/CampaignListSlice';

const store = configureStore({
    reducer: {
        campaignList: campaignListReducer
    }
})


export default store;