import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Suspense, lazy} from 'react';

import LayoutDashboard from './layout/LayoutDashboard';

const SignUpPage = lazy(() => import('./pages/SignUpPage'))
const SignInPage = lazy(() => import('./pages/SignInPage') )
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const CampaignPage = lazy(() => import('./pages/CampaignPage'))
const PaymentPage = lazy(() => import('./pages/PaymentPage'))
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <div className="App">
            <Routes>
              <Route element={<LayoutDashboard></LayoutDashboard>}>
                <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
                <Route path='/campaign' element={<CampaignPage></CampaignPage>} ></Route>
                <Route path='/payment' element={<PaymentPage></PaymentPage>} ></Route>
              </Route>
              <Route path='/signUp' element={<SignUpPage></SignUpPage>}></Route>
              <Route path='/signIn' element={<SignInPage></SignInPage>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
