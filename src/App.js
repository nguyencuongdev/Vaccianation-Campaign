import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { CampaignSevice } from '~/services';
import { campaignListActions } from '~/components/CampaignList/CampaignListSlice';
import { routers } from '~/routers';
import { DefaultLayout } from '~/layouts';
import { GlobalStyle } from '~/components';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetCompaignList = async () => {
      const data = await CampaignSevice.getCampaignListService();
      dispatch(campaignListActions.storeCampaigns(data));
    }
    handleGetCompaignList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle>
        <div className="App">
          <Routes>
            {routers.map((router, index) => {
              let Layout = DefaultLayout;

              if (router.layout)
                Layout = router.layout;
              else if (router.layout === null)
                Layout = Fragment;

              const Page = router?.component;
              return (
                <Route key={index} path={router?.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />)
            })}
          </Routes>
        </div>
      </GlobalStyle>
    </BrowserRouter>
  );
}

export default App;
