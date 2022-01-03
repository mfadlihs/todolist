/* global React */
const Input = props => {
  const [todo, setTodo] = React.useState('');
  const [date, setDate] = React.useState('');
  const [id, setId] = React.useState(0);

  const submit = event => {
    event.preventDefault();
    const dataTemp = JSON.parse(JSON.stringify(props.data));
    const temp = {
      id: id,
      todo: todo,
      date: date
    };
    setId(id + 1);
    dataTemp.push(temp);
    props.setData(dataTemp);
  };

  return /*#__PURE__*/React.createElement("div", {
    id: "input",
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/React.createElement("h2", null, "Masukkan Data")), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "input context"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "context"
  }, "Masukkan Hal yang ingin dilakukan:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "context",
    required: true,
    placeholder: "todo",
    onChange: event => {
      setTodo(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "input date"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "date"
  }, "Masukkan tanggal berapa ingin diselesaikan:"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    id: "date",
    required: true,
    onChange: event => {
      setDate(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "submit"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit"), /*#__PURE__*/React.createElement("div", {
    className: "clear"
  })))));
};

export default Input;