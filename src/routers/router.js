import { routers } from '~/configs';
import { HomePage, CampaignAgendaPage, LoginPage, SignupPage, SessionDetailPage } from '~/pages';


const router_public = [
    {
        path: routers.home,
        component: HomePage,
    },
    {
        path: routers.campaignAgenda,
        component: CampaignAgendaPage,
    },
    {
        path: routers.sessionDetail,
        component: SessionDetailPage,
    },
    {
        path: routers.login,
        component: LoginPage,
    },
    {
        path: routers.signup,
        component: SignupPage,
    }
]

const router_privates = [];


export default router_public;