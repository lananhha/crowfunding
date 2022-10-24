import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Suspense, lazy} from 'react';

const SignUpPage = lazy(() => import('./pages/SignUp/SignUpPage'))
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <div className="App">
            <Routes>
              <Route path='/signUp' element={<SignUpPage></SignUpPage>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
