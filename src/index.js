import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import home from './Containers/home';
import contact from './Containers/contact';
import trailer from './Containers/trailer';
import presskit from './Containers/presskit';
import synopsis from './Containers/synopsis';
import videos from './Containers/videos';
import donate from './Containers/donate';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={home} />
      <Route path="/contact" component={contact} />
      <Route path="/trailer" component={trailer} />
      <Route path="/presskit" component={presskit} />
      <Route path="/synopsis" component={synopsis} />
      <Route path="/videos" component={videos} />
      <Route path="/donate" component={donate} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
