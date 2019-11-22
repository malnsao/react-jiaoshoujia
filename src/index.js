
import React from 'react'
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    HashRouter
} from "react-router-dom";

import './index.less'

import routeConfig from './router';

import store from './store.js';
import { Provider } from 'react-redux';


import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import BasicLayout from './layouts/BasicLayout'


ReactDOM.render(
    (
        <BasicLayout />
        
    ),
    document.getElementById('root')
)

import('./async').then(({default:text}) => {
    console.log(text)
})

import('./async1').then(({ default: text }) => {
    console.log(text)
})


// import './asscts/1.png'

// import { cube } from './util'

// import('./App')

// console.log(App)

// console.log('------')

// console.log(
//     import('./App').then(() => {
//         console.log('111')
//     })
// )

/**
 * 
 * <Route exact path="/" component={() => import('./App')}></Route>
<Route exact path="/" render={props => <App {...props} />}></Route>
    <Route exact path="/" component={App}></Route>
    <Route path="/home" component={Home}>
        <Route path="/home/hom2" component={Home2}></Route>
    </Route>
    <Route path="/home1" component={Home1}></Route>
 */

  // <HashRouter>
        //     <Route exact path="/" component={App}></Route>
        //     <Route path="/home" component={Home} ></Route>
        //     <Route path="/home1" component={Home1}></Route>
        // </HashRouter>

