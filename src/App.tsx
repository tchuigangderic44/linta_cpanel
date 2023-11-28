import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ECommerce from './pages/Dashboard/ECommerce';
import Loader from './common/Loader';
import routes from './routes';
import PrivateRoute from './routes/PrivateRoute';
import privateRoutes from './routes/private';
import SignIn from './modules/authModule/pages/Authentication/SignIn';
import '../i18n'
import i18n from '../i18n';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from './store/authentication/authentication.slice';
import { AppDispatch } from './store';
import { userInfos } from './store/authentication/authentication.repository';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const authState = useSelector((state: { auth: AuthState }) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    if(authState.connected){
      dispatch(userInfos(null));
    }
  }, []);

  //default language change hook
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  //if user logout get back to signIn
  useEffect(() => {
    if (!authState.connected) {
      navigate("/auth/signin");
    }
    return () => {
    }
  }, [authState.connected])



  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto' />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route element={<DefaultLayout />}>
            <Route
              path="/"
              element={
                <PrivateRoute />
              }
            >
              {privateRoutes.map(({ path, component: Component }) => (
                <Route
                  path={path}
                  element={
                    <Component />
                  }
                />
              ))}
            </Route>
            <Route index element={<ECommerce />} />
            {routes.map(({ path, component: Component }) => (
              <Route
                path={path}
                element={
                  <Component />
                }
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
