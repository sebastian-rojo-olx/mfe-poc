import React, { Component } from 'react';
import './App.css';
import MainRouter from './routes/mainRouter';
import { ConduitProvider } from "react-conduit";

let routes = {};
let appLoaded = [];
let registeredApps = ['mf1', 'mf2', 'mf3'];


class App extends Component {

  render() {
    return (
      <div className="App" >
        <ConduitProvider>
          <MainRouter routes={routes} />
        </ConduitProvider>
      </div>
    );
  }
}



var loadMicroFront = function loadMicroFront(microName) {
  return fetch(`./${microName}/asset-manifest.json`).then(function (response) {
    return response.json();
  }).then(function (data) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement("script");
      el.src = `./${data[`${microName}.js`]}`;
      el.addEventListener('load', function () {
        //import( /*webpackMode: "weak" */ microName).then(function(data){
        //    console.log("routes", data);
        //});
        window[microName].default.Contract().then(function (contract) {
          routes = {...routes, [microName]: contract.Routes};
          return resolve(contract.Routes); //window.shellComponent.forceUpdate();
        });
      }, false);
      el.addEventListener('error', function (err) {
        console.log("Error ", err);
        return reject(el);
      }, false);
      document.body.appendChild(el);
    });
  }).catch(function (err) {
    console.log("Error ", err); // Do something for an error here
  });
};

registeredApps.forEach((appName)=>{
  appLoaded.push(loadMicroFront(appName));
});
Promise.all(appLoaded).then(function (contracts) {
  console.log("contracts", contracts);
  window.shellComponent.forceUpdate();
});




export default App;
