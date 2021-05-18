import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Resources from './pages/resources';
import Resource from './pages/resource';

import Layout from './components/layout';
import Kiwi from './pages/kiwi';
import Wishlist from './pages/wishlist';
import Loans from './pages/loans';

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);
  useEffect(() => {
    dispatch({ type: 'APP_INIT' });

    setTimeout(() => {
      dispatch({ type: 'APP_READY' });
    }, 2000);
  }, []);

  console.log('APP global state:', appState);

  if (appState.loading) return <p>loading, attendez patiemment, merci</p>;

  return (
    <Router>
      <Switch>
        <Route path="/resources" component={Resources} />
        <Route path="/resources/:id" component={Resource} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/loans" exact component={Loans} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/kiwi" component={Kiwi} />
        </Layout>
      </Switch>
    </Router>
  );
};
export default App;
