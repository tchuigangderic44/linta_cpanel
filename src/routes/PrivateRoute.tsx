import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthState } from '../store/authentication/authentication.slice';

export default function () {
    const authState = useSelector((state: { auth: AuthState }) => state.auth);

    return authState.connected ? <Outlet /> : <Navigate to="/auth/signin" replace />;
}