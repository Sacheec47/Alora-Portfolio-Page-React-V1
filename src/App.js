// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {red800} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <AppBar
//         title="ALORA Web Design Studio"
//         iconClassNameRight="muidocs-icon-navigation-expand-more"
//       />
//       </div>
//     );
//   }
// // }


const navBarStyle = getMuiTheme({
  palette: {
    backgroundColor: red800,
  },
  appBar: {
    height: 40,
  },
});

const Main = () => (
   <MuiThemeProvider muiTheme={navBarStyle}>
    <AppBar
      title="ALORA Web Design Studio"
      // iconClassNameRight="muidocs-icon-navigation-expand-more"
      titleStyle={{ fontSize: '18px'}}
      style={{ backgroundColor: red800}}
    />
  </MuiThemeProvider>
);

export default Main;
