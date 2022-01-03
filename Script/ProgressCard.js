/* global React */
const Progresscard = props => {
  // React.useEffect(() => {
  // 	console.log(`done tempnya : ${props.done}`);
  // });
  const done = () => {
    let dataTemp = JSON.parse(JSON.stringify(props.data));
    let doneTemp = JSON.parse(JSON.stringify(props.done));
    let donecardtemp = dataTemp.filter(data => {
      return data.id == props.datacard.id;
    });
    dataTemp = dataTemp.filter(data => {
      return data.id != props.datacard.id;
    });
    props.setData(dataTemp);
    doneTemp.push(donecardtemp[0]);
    props.setDone(doneTemp);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "progresscard card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "todo"
  }, props.datacard.todo), /*#__PURE__*/React.createElement("div", {
    className: "tanggal"
  }, props.datacard.date), /*#__PURE__*/React.createElement("div", {
    onClick: done,
    className: "icon check"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  })));
};

export let Card = Progresscard;