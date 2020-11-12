import { BrowserRouter, Switch } from 'react-router-dom'
import React from 'react'

import PrivateRoute from './PrivateRoute'

import MyMessageListScreen from 'src/screens/Messages/MyMessages'
import MessageListScreen from '../screens/Messages/List'
import Error404Screen from '../screens/Errors/Error404'
import RegisterScreen from '../screens/Auth/Register'
import LoginScreen from '../screens/Auth/Login'
import PublicRoute from './PublicRoute'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={MessageListScreen} />
      <PrivateRoute exact path="/me/messages" component={MyMessageListScreen} />
      <PublicRoute restricted exact path="/login" component={LoginScreen} />
      <PublicRoute
        restricted
        exact
        path="/register"
        component={RegisterScreen}
      />
      <PublicRoute exact path="*" component={Error404Screen} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
