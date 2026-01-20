import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './components/home/home';
import { DataBinding } from './components/dataBindingComponent/dataBindingComponent';
import { ShoppingComponent } from './components/shoppingComponent/shoppingComponent';
import { StateDemo } from './components/StateDemo';
import { DataBinding01 } from './components/DataBinding';
import   '../node_modules/bootstrap/dist/css/bootstrap.css';
import   '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { AjaxDemo } from './components/ajax-demo';
import { ShoppingIndex } from './shopping/ShoppingIndex';
import { DateDemo } from './components/date-demo';
import { TwoWayBinding } from './components/TowWayBinding';
import { FormDemo } from './components/form-demo';
import { UseFormHookDemo } from './components/UseFormHookDemo';
import { HookFormDemo } from './components/controlled-component/HookFormDemo';
import { Login } from './components/login/login';
import { ContextDemo } from './components/context-demo';
import { CookieDemo } from './components/cookieDemo';
import { CookiesProvider } from 'react-cookie';
import { ReducerDemo } from './components/reducerDemo';
import { IshopIndex } from './iShop/iShopIndex';
import { JiraIndex } from './jira/jiraIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <JiraIndex/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
