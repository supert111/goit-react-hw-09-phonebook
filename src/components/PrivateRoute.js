import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

export default function PrivateRoute ({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      //если render надо прокидывать props
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}