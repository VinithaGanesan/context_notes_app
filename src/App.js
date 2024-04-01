import { Fragment } from 'react';
import './App.css';
import { useAuthentication } from './Contexts/Authentication.Context';
import { AuthenticatedRoutes, AuthenticationRoutes } from './Routes';
import { Route, Routes } from 'react-router-dom';
import app from './Components/app';
import Notfound from './pages/Notfound';

function App() {
  const { loggedIn } = useAuthentication();

  function renderRoutes(flag = false) {
    if (flag) {
      return (
        <Fragment>
          <Route Component={app} >
            {
              AuthenticatedRoutes.children.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  Component={route.component}
                />
              ))
            }
          </Route>
        </Fragment>
      )
    } else {
      return (
        <Fragment>

          {
            AuthenticationRoutes.map((route, index) => (
              <Route key={index} path={route.path} Component={route.component} />
            ))
          }
        </Fragment>
      )
    }
  }


  return (
    <div className='App'>
      <Routes>
        {renderRoutes(loggedIn)}
        <Route path='*' Component={Notfound}/>
      </Routes>
    </div>
  );
}

export default App;
