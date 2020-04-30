import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  TarefaList as TarefaListView,
  UserList as UserListView,
  ClienteList as ClienteListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
        {/* <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      /> */}
      <RouteWithLayout
        component={TarefaListView}
        exact
        layout={MainLayout}
        path="/tarefas"
      />
    
     /* <RouteWithLayout
        component={ProductListView}
        exact
        layout={MinimalLayout}
        path="/produtos"
      /> */

      />
        <RouteWithLayout
        component={ClienteListView}
        exact
        layout={MainLayout}
        path="/clientes"
      />
      {/* <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      /> */}
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/login"
      />
   
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
