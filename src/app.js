import React from 'react'
import Main from './components/layout/main'
import { Route, Routes } from 'react-router-dom'
import HomeRestaurant from './components/layout/homeRestaurant/homeRestaurant'
import OrderLanding from './pages/app/orderLandingPage'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signUp'
import IndexMain from './pages/main-admin-page'

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Main} />
      <Route path='/home' Component={HomeRestaurant} />
      <Route path='/MainDashboardIndex' Component={IndexMain}/>
      <Route path='/order-landing page' Component={OrderLanding} />
      <Route path='/loginSignUp' Component={Login} />
      <Route path='/signUp' Component={SignUp} />
    </Routes>
  )
}

export default App