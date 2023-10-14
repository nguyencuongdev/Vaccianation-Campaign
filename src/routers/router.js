import { routers } from '~/configs';
import { HomePage, CampaignAgendaPage } from '../pages';
import { DefaultLayout } from '~/layouts';
import { VaccineRegistration } from '~/components/VaccineRegistration';

const router_public = [
    {
        path: routers.home,
        component: HomePage,
        layout: DefaultLayout,
    },
    {
        path: routers.campaignAgenda,
        component: CampaignAgendaPage,
        layout: DefaultLayout,
    },
    {
        path: routers.sessionDetail,
        component: VaccineRegistration,
    },
    // {
    //     path: routers.login,
    //     component: LoginPage,
    // },
    // {
    //     path: routers.signup,
    //     component: SignupPage,
    // }
]

// const router_privates = [];


export default router_public;