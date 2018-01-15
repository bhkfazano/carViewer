import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import Login from './components/login.jsx';
import SignUp from './components/sign_up.jsx';
import Cars from './components/get_user_cars.jsx';
import EditUser from './components/edit_user.jsx';
import EditPassword from './components/edit_password.jsx';
import AddCar from './components/add_car.jsx';
import EditCar from './components/edit_car.jsx';

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
