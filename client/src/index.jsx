import data from './data.js';
import React from 'react';
import ReactDOM from 'react-dom';
import News from './components/News.jsx';




ReactDOM.render(
    <News data={data}/>,
    document.getElementById('news')
);
//data={data}

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('news')
//   );