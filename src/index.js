import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import './all.css';
import './all.min.css';
import App from './components/App/App';
import './all.min.css';

import reportWebVitals from './reportWebVitals';
// import Header from "./components/Header/Header";
// import SideBar from "./components/SideBar/SideBar";
// import Footer from './components/Footer/Footer'
// import Chat from "./components/Chat/Chat";
=======
import App from './App';
import reportWebVitals from './reportWebVitals';
>>>>>>> 9b90d24 (first commit)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* <Header />
    <SideBar />
    <Chat />
    <Footer /> */}
=======
>>>>>>> 9b90d24 (first commit)
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
