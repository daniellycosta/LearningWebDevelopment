var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var allTimeApi = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
var recentApi = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'banner grad' },
          React.createElement('img', { src: 'http://metakata.altervista.org/wordpress/wp-content/uploads/2015/08/freecodecamp_white.png', alt: 'FreeCodeCamp Logo', className: 'logo ' }),
          React.createElement(
            'h1',
            null,
            ' FreeCodeCamp Leaderboard '
          )
        ),
        React.createElement(TableContent, null)
      );
    }
  }]);

  return App;
}(React.Component);

var TableContent = function (_React$Component2) {
  _inherits(TableContent, _React$Component2);

  function TableContent(props) {
    _classCallCheck(this, TableContent);

    var _this2 = _possibleConstructorReturn(this, (TableContent.__proto__ || Object.getPrototypeOf(TableContent)).call(this, props));

    _this2.showBestRecent = function () {
      _this2.setState({ allTimeRequested: false }, function () {
        return _this2.getFetch();
      });
    };

    _this2.showBestAllTime = function () {
      _this2.setState({ allTimeRequested: true }, function () {
        return _this2.getFetch();
      });
    };

    _this2.state = {
      allTimeRequested: false,
      usersData: []
    };
    return _this2;
  }

  _createClass(TableContent, [{
    key: 'getFetch',
    value: function getFetch() {
      var _this3 = this;

      fetch(this.state.allTimeRequested ? allTimeApi : recentApi).then(function (results) {
        return results.json();
      }).then(function (data) {
        var tableData = data.map(function (user, index) {
          return React.createElement(
            'tr',
            { key: user.username, style: { textAlign: 'center' } },
            React.createElement(
              'th',
              null,
              index + 1
            ),
            React.createElement(
              'td',
              null,
              React.createElement('img', { src: user.img, className: 'profilePhotos', alt: user.username + ' profile photo' }),
              React.createElement(
                'a',
                { href: 'https://www.freecodecamp.com/' + user.username },
                user.username
              )
            ),
            React.createElement(
              'td',
              null,
              user.recent
            ),
            React.createElement(
              'td',
              null,
              user.alltime
            )
          );
        });
        _this3.setState({
          usersData: tableData
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getFetch();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'col-12', style: { textAlign: 'center' } },
        React.createElement(
          'table',
          { className: 'table table-striped table-bordered tableShadow' },
          React.createElement(
            'th',
            null,
            '#'
          ),
          React.createElement(
            'th',
            null,
            'Camper name'
          ),
          React.createElement(
            'th',
            { className: this.state.allTimeRequested ? "notSelected" : "selected grad",
              onClick: this.showBestRecent },
            'Points in past 30 days'
          ),
          React.createElement(
            'th',
            { className: this.state.allTimeRequested ? "selected grad" : "notSelected",
              onClick: this.showBestAllTime },
            'All time points'
          ),
          React.createElement(
            'tbody',
            null,
            this.state.usersData
          )
        )
      );
    }
  }]);

  return TableContent;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));