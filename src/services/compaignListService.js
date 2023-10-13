import { get } from '~/utils/request';

export const getCompaignListService = async () => {
    try {
        const res = await get('/campaignList');
        return res;
    }
    catch (err) {
        console.log(err);
    }
}