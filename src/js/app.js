import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Home from './pages/home';
import Login from './pages/login';

import Layout from './components/layout';
import Books from './pages/books';
import Register from './pages/register';
import Kiwi from './pages/kiwi';

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
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/kiwi" component={Kiwi} />
        </Layout>
      </Switch>
    </Router>
  );
};
export default App;
