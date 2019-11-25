
import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import Home from './layouts'

import {
    BrowserRouter as Router,
    HashRouter,
    Route
} from "react-router-dom";

import routeConfig from '@/router';


ReactDOM.render((
    // <HashRouter>
    //     {routeConfig}
    // </HashRouter>
    <Home />
),document.getElementById('root'))





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








// // 列子

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import {
//     BrowserRouter as Router,
//     HashRouter,
//     Route,
//     Link,
//     Switch
// } from 'react-router-dom';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>App</h1>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/inbox">Inbox</Link></li>
//                 </ul>
//                 {this.props.children}

//             </div>
//         );
//     }
// }

// const About = () => (
//     <div>
//         <h3>About</h3>
//     </div>
// )

// const Home = () => (
//     <div>
//         <h3>Home</h3>
//     </div>
// )

// const Message = ({ match }) => (
//     <div>
//         <h3>new messages</h3>
//         <h3>{match.params.id}</h3>
//     </div>
// )

// const Inbox = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <Route path={`${match.url}/messages/:id`} component={Message} />

//     </div>
// )

// ReactDOM.render(
//     (<HashRouter>
//         <App>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/inbox" component={Inbox} />
//         </App>
//     </HashRouter>),
//     document.getElementById('root')
// );
