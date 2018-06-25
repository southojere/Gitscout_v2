import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
// /* Creates user objects which will be displayed to the view */
// function createUser(name, gist, repo, followers, following, languages) {
//     const user = {
//         firstName: name,
//         gist: gist,
//         repo: repo,
//         followers: followers,
//         following: following,
//         languages: languages,//list

//     };
//     return user;
// }

// //lists that stores users
// var users = new Array;
// const user = createUser("Jeremy Southon", 12, 23, 11, 12, ['java', 'python']);




ReactDOM.render(<App />, document.getElementById('root'));