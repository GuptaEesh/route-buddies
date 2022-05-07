import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context';

export const RequiresAuth = () => {
  const {
    token,
  } = useAuth();

  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace={true} />
  );
};
