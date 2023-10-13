import { get } from '~/utils/request';

export const getCampaignListService = async () => {
    try {
        const res = await get('/campaignList');
        return res;
    }
    catch (err) {
        console.log(err);
    }

}

export const getCampaignAgendaInforService = async (url) => {
    try {
        const res = await get(url);
        return res;
    } catch (err) {
        console.log(err);
    }
}