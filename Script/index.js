/* global React ReactDOM */
const root = document.querySelector('#root'); // ---- Import Component

import Header from './Header.js';
import Input from './Input.js';
import Progress from './Progress.js';
import Done from './Done.js'; // ------------------------
// Mengecek dan Inisialisasi Local Storage

let datakey = 'progressHistory';
let donekey = 'doneHistory';
let dataInit, doneInit;
let dataTemp = JSON.parse(localStorage.getItem(datakey));
let doneTemp = JSON.parse(localStorage.getItem(donekey));

if (dataTemp == null || dataTemp.length == 0) {
  dataInit = [];
} else {
  dataInit = dataTemp;
}

if (doneTemp == null || doneTemp.length == 0) {
  doneInit = [];
} else {
  doneInit = doneTemp;
} // =============================


const App = () => {
  const [data, setData] = React.useState(dataInit);
  const [done, setDone] = React.useState(doneInit);
  React.useEffect(() => {
    localStorage.setItem(datakey, JSON.stringify(data));
    localStorage.setItem(donekey, JSON.stringify(done));
  }, [data, done]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    id: "container"
  }, /*#__PURE__*/React.createElement(Input, {
    data: data,
    setData: setData
  }), /*#__PURE__*/React.createElement(Progress, {
    data: data,
    setData: setData,
    done: done,
    setDone: setDone
  }), /*#__PURE__*/React.createElement(Done, {
    data: data,
    setData: setData,
    done: done,
    setDone: setDone
  })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);