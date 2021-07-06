import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


// import Nav from './components/Nav'

// import Home from './views/Home'
// import About from './views/About'
// import NotFound from './views/NotFound'

// const App = () => {
//   return (
//     <Router>
//       <Nav />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route>
//           <NotFound />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };


import pages from './pages/index.tsx';

import {
  Container,
  Header,
  Footer,
} from './components/index.js';

class App extends Component {
  renderRoute({
                id,
                disabled,
                getComponent,
              }, isDefault) {
    if (!disabled) {
      if (isDefault) {
        return (
          <Route
            key={`default-${id}`}
            path="/"
            exact
            component={getComponent}
          />
        );
      }
      else {
        return (
          <Route
            key={id}
            path={`/${id}`}
            exact
            component={getComponent}
          />
        );
      }
    }
  }

  renderRoutes() {
    const routes = [];

    pages.forEach((route) => {
      const { isDefault } = route;
      if (isDefault) {
        routes.push(this.renderRoute(route, true));
      }
      routes.push(this.renderRoute(route));
    });

    return routes;
  }

  render() {
    return (
      <HashRouter>
        <Header />
        <Container role="main">
          <Fragment>
            {this.renderRoutes()}
          </Fragment>
        </Container>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
