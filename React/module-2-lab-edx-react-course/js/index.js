var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var questions = [{
  title: "React is a...",
  options: ["Framework", "Library", "Video", "City"],
  correctAnswer: "Library"
}, {
  title: "React was created by ... developers",
  options: ["Google", "IBM", "Facebook", "Instagram"],
  correctAnswer: "Instagram"
}, {
  title: "Which one is more like ReactJS?",
  options: ["Vue", "Angular", "C++", "All"],
  correctAnswer: "Vue"
}, {
  title: "React is used on about ... websites (Acording to Libscore)",
  options: [5000, 1500000, 1500, 50000],
  correctAnswer: 1500
}, {
  title: "React was released in...",
  options: [2010, 2011, 2012, 2013, 2014, 2015],
  correctAnswer: 2013
}, {
  title: "React...was created for building apps for iOS, Android and Windows Phone",
  options: ["Mobile", "Native", "App", "Creative"],
  correctAnswer: "Native"
}, {
  title: "The React framework for mobile apps development was released in...",
  options: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
  correctAnswer: 2015
}, {
  title: "React come with a REST tool for making HTTP request",
  options: ["True", "False"],
  correctAnswer: "False"
}, {
  title: "React does not impose any restrictions on your data architecture",
  options: ["True", "False"],
  correctAnswer: "True"
}, {
  title: "React is popular because it ...",
  options: ["is useful and time saving", "is used by Google", "has a pretty name", "is an easy learning framework"],
  correctAnswer: "is useful and time saving"
}];

var Trivia = function (_React$Component) {
  _inherits(Trivia, _React$Component);

  function Trivia(props) {
    _classCallCheck(this, Trivia);

    var _this = _possibleConstructorReturn(this, (Trivia.__proto__ || Object.getPrototypeOf(Trivia)).call(this, props));

    _this.verifyAnswer = function (choosenOption) {
      if (choosenOption === questions[_this.state.questionNumber].correctAnswer) {
        _this.setState({ correctScore: _this.state.correctScore + 1 });
      } else {
        _this.setState({ incorrectScore: _this.state.incorrectScore + 1 });
      }
      _this.setState({ questionNumber: _this.state.questionNumber + 1 });
    };

    _this.state = { correctScore: 0, incorrectScore: 0, questionNumber: 0 };
    _this.verifyAnswer = _this.verifyAnswer.bind(_this);
    return _this;
  }

  _createClass(Trivia, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "text-center jumbotron" },
          React.createElement(
            "h1",
            null,
            " React Trivia Game "
          )
        ),
        React.createElement(
          "div",
          { style: { margin: 5 }, className: "row text-center" },
          React.createElement(
            "div",
            { className: "col-6" },
            React.createElement(
              "h2",
              null,
              this.state.questionNumber + 1,
              ". ",
              questions[this.state.questionNumber].title
            ),
            React.createElement(Questions, { onClick: this.verifyAnswer, question: questions[this.state.questionNumber] })
          ),
          React.createElement(
            "div",
            { className: "col-6" },
            React.createElement(
              "h2",
              null,
              " Score: "
            ),
            React.createElement(Score, { label: "Correct", score: this.state.correctScore }),
            React.createElement(Score, { label: "Incorrect", score: this.state.incorrectScore }),
            React.createElement(
              "button",
              { onClick: function onClick() {
                  return _this2.setState({ correctScore: 0, incorrectScore: 0, questionNumber: 0 });
                }, className: "btn btn-dark" },
              " Reset "
            )
          )
        )
      );
    }
  }]);

  return Trivia;
}(React.Component);

var Score = function Score(props) {
  return React.createElement(
    "h3",
    null,
    props.label,
    ": ",
    props.score
  );
};

var Questions = function Questions(props) {
  var alternativesToRender = props.question.options.map(function (option) {
    return React.createElement(
      "div",
      { className: "col-12" },
      React.createElement(
        "button",
        { onClick: function onClick() {
            return props.onClick(option);
          }, className: "btn btn-block", style: { margin: 5 } },
        " ",
        option,
        " "
      )
    );
  });
  return React.createElement(
    "div",
    null,
    alternativesToRender
  );
};

ReactDOM.render(React.createElement(Trivia, null), document.getElementById("root"));