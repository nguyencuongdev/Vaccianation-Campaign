import { routers } from '~/configs';
import { HomePage, CampaignAgendaPage } from '../pages';
import { DefaultLayout } from '~/layouts';


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
    // {
    //     path: routers.sessionDetail,
    //     component: SessionDetailPage,
    // },
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