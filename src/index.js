import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Modules from "./Modules";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/modules" component={Modules}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
