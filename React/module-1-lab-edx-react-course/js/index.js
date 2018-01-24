var Header = function Header(props) {
  return React.createElement(
    "div",
    { className: "text-center jumbotron" },
    React.createElement(
      "h2",
      null,
      props.title
    ),
    props.description,
    React.createElement("p", null)
  );
};

var SectionTitle = function SectionTitle(props) {
  return React.createElement(
    "div",
    { className: "col-12 text-center" },
    React.createElement(
      "h2",
      null,
      props.secTitle
    )
  );
};

var Checkbox = function Checkbox(props) {
  return React.createElement(
    "div",
    { className: "col-6" },
    props.label + " ",
    React.createElement("input", { type: "checkbox", id: props.id, name: props.name, value: props.value })
  );
};

var SelectionItem = function SelectionItem(props) {
  return React.createElement(
    "option",
    { value: props.value },
    " ",
    props.tag,
    " "
  );
};

var Selection = function Selection(props) {
  return React.createElement(
    "div",
    { className: "col-6" },
    React.createElement("p", null),
    props.label + "  ",
    React.createElement(
      "select",
      null,
      React.createElement(SelectionItem, { value: props.values[0], tag: props.tags[0] }),
      React.createElement(SelectionItem, { value: props.values[1], tag: props.tags[1] }),
      React.createElement(SelectionItem, { value: props.values[2], tag: props.tags[2] }),
      React.createElement(SelectionItem, { value: props.values[3], tag: props.tags[3] })
    )
  );
};

var Table = function Table(props) {
  return React.createElement(
    "div",
    { className: "col-10 container" },
    React.createElement(
      "ul",
      null,
      React.createElement(
        "table",
        { className: "table table-responsive-sm" },
        React.createElement(
          "thead",
          { className: "thead-light" },
          React.createElement("tr", null),
          React.createElement(
            "th",
            null,
            props.tableHeader[0]
          ),
          React.createElement(
            "th",
            null,
            props.tableHeader[1]
          ),
          React.createElement(
            "th",
            null,
            props.tableHeader[2]
          ),
          React.createElement(
            "th",
            null,
            props.tableHeader[3]
          ),
          React.createElement("tr", null)
        ),
        React.createElement(
          "tbody",
          null,
          React.createElement("tr", null),
          React.createElement(
            "td",
            { className: "table-light" },
            props.tableData[0]
          ),
          React.createElement(
            "td",
            { className: "table-light" },
            props.tableData[1]
          ),
          React.createElement(
            "td",
            { className: "table-light" },
            props.tableData[2]
          ),
          React.createElement(
            "td",
            { className: "table-light" },
            React.createElement(
              "button",
              { className: "btn btn-dark" },
              props.buttonLabel
            )
          ),
          React.createElement("tr", null)
        )
      )
    )
  );
};

var categories = ["All", "Cars", "Trucks", "Convertibles"];
var header = ["Year", "Model", "Price", "Buy"];
var buttonName = "Buy Now";

var TransportationApp = function TransportationApp() {
  return React.createElement(
    "div",
    null,
    React.createElement(Header, { title: "Welcome to React Transportation", description: "The best place to buy vehicles online" }),
    React.createElement(
      "div",
      { className: "row text-center" },
      React.createElement(SectionTitle, { secTitle: "Choose Options" }),
      React.createElement(Checkbox, { label: "New Only", id: "coding", name: "interest", value: "coding" }),
      React.createElement(Selection, { label: "Select Type", values: categories, tags: categories })
    ),
    React.createElement(SectionTitle, { secTitle: categories[1] }),
    React.createElement(Table, { tableHeader: header, tableData: ["2013", "A", "$32000"], buttonLabel: buttonName }),
    React.createElement(Table, { tableHeader: header, tableData: ["2011", "B", "$4400"], buttonLabel: buttonName }),
    React.createElement(Table, { tableHeader: header, tableData: ["2016", "B", "$15500"], buttonLabel: buttonName }),
    React.createElement(SectionTitle, { secTitle: categories[2] }),
    React.createElement(Table, { tableHeader: header, tableData: ["2014", "D", "$18000"], buttonLabel: buttonName }),
    React.createElement(Table, { tableHeader: header, tableData: ["2013", "E", "$5200"], buttonLabel: buttonName }),
    React.createElement(SectionTitle, { secTitle: categories[3] }),
    React.createElement(Table, { tableHeader: header, tableData: ["2009", "F", "$2000"], buttonLabel: buttonName }),
    React.createElement(Table, { tableHeader: header, tableData: ["2010", "G", "$6000"], buttonLabel: buttonName }),
    React.createElement(Table, { tableHeader: header, tableData: ["2012", "H", "$12500"], buttonLabel: buttonName }),
    React.createElement(Table, { tableHeader: header, tableData: ["2017", "M", "$50000"], buttonLabel: buttonName })
  );
};

ReactDOM.render(React.createElement(TransportationApp, null), document.getElementById("root"));