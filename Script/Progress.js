/* global React */
import { Card } from './ProgressCard.js';

const Progress = props => {
  return /*#__PURE__*/React.createElement("div", {
    id: "progress",
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/React.createElement("h2", null, "Sedang Berlangsung")), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, props.data[0] == undefined ? /*#__PURE__*/React.createElement("p", null, "Tidak ada Data") : props.data.map((card, index) => {
    return /*#__PURE__*/React.createElement(Card, {
      key: index,
      datacard: card,
      data: props.data,
      setData: props.setData,
      done: props.done,
      setDone: props.setDone
    });
  })));
};

export default Progress;