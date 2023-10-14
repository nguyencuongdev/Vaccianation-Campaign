import { get, post } from '~/utils/request';


export const getCampaignListService = async (option = {}) => {
    try {
        const res = await get('/campaignList');
        return res;
    }
    catch (err) {
        console.log(err);
    }

}

export const getCampaignAgendaInforService = async (url, option = {}) => {
    try {
        const res = await get(url, option);
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const registrattionCampaignService = async (url, data, option = {}) => {
    try {
        const res = await post(url, data, option);
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const getCampaignUserRegistedService = async (url, option = {}) => {
    try {
        const res = await get(url, option);
        return res;
    } catch (err) {
        console.log(err);
    }
}
