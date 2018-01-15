import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import Login from './containers/login.jsx';
import SignUp from './containers/sign_up.jsx';
import Cars from './containers/get_user_cars.jsx';
import EditUser from './containers/edit_user.jsx';
import EditPassword from './containers/edit_password.jsx';
import AddCar from './containers/add_car.jsx';
import EditCar from './containers/edit_car.jsx';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/user/cars/add" component={AddCar} />
          <Route path="/user/cars/edit" component={EditCar} />
          <Route path="/user/cars" component={Cars} />
          <Route path="/user/edit" component={EditUser} />
          <Route path="/user/editpassword" component={EditPassword} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
