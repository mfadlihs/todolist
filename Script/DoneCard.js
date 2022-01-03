/* global React */
const Card = props => {
  const undo = () => {
    let progressTemp = JSON.parse(JSON.stringify(props.data));
    let doneTemp = JSON.parse(JSON.stringify(props.done));
    progressTemp.push(props.datacard);
    doneTemp = doneTemp.filter(i => {
      return i.id != props.datacard.id;
    });
    props.setData(progressTemp);
    props.setDone(doneTemp);
  };

  const trash = () => {
    let progressTemp = JSON.parse(JSON.stringify(props.data));
    let doneTemp = JSON.parse(JSON.stringify(props.done));
    doneTemp = doneTemp.filter(i => {
      return i.id != props.datacard.id;
    });
    props.setDone(doneTemp);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "donecard card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "todo"
  }, props.datacard.todo), /*#__PURE__*/React.createElement("div", {
    className: "tanggal"
  }, props.datacard.date), /*#__PURE__*/React.createElement("div", {
    onClick: undo,
    className: "icon undo"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-undo-alt"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: trash,
    className: "icon trash"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-trash-alt"
  })));
};

export default Card;