/* global React */
import Card from './DoneCard.js';

const Done = props => {
  return /*#__PURE__*/React.createElement("div", {
    id: "done",
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/React.createElement("h2", null, "Sudah Selesai")), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, props.done[0] === undefined ? /*#__PURE__*/React.createElement("p", null, "Tidak ada Data") : props.done.map(datacard => {
    return /*#__PURE__*/React.createElement(Card, {
      key: datacard.id,
      datacard: datacard,
      done: props.done,
      setDone: props.setDone,
      data: props.data,
      setData: props.setData
    });
  })));
};

export default Done;