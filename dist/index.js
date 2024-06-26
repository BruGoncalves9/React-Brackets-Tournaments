function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Bracket = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose([" \n  display: flex;\n  flex-direction: row;\n  @media (max-width: ", "px) {\n    flex-direction: column;\n  }\n  "])), function (props) {
  return props.mobileBreakpoint;
});
var Round = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  flex: 0;\n  display:flex;\n  flex-direction:column;\n  @media (max-width: ", "px) {\n    min-width:0;\n  }\n  "])), function (props) {
  return props.mobileBreakpoint;
});
var RoundTitle = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  color: #8f8f8f;\n  font-weight: 400;\n  text-align: center;\n"])));
var SeedsList = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-flow: row wrap;\n  justify-content: center;\n  height: 100%;\n  list-style: none;\n"])));

function useMedia(breakPoint) {
  var _useState = React.useState(typeof window !== 'undefined' ? window.innerWidth <= breakPoint : false),
    isSmaller = _useState[0],
    setIsSmaller = _useState[1];
  React.useEffect(function () {
    function screenResized() {
      if (isSmaller && window.innerWidth > breakPoint) {
        setIsSmaller(false);
      } else if (!isSmaller && window.innerWidth <= breakPoint) {
        setIsSmaller(true);
      }
    }
    if (typeof window !== 'undefined') window.addEventListener('resize', screenResized);
    return function () {
      if (typeof window !== 'undefined') window.removeEventListener('resize', screenResized);
    };
  }, [isSmaller]);
  return isSmaller;
}

var _templateObject$1, _templateObject2$1;
var SeedItem = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  color: #fff;\n  width: 100%;\n  background-color: #1a1d2e;\n  padding: 0;\n  border-radius: 0.2em;\n  box-shadow: 0 2px 4px -2px #111630;\n  text-align: center;\n  position: relative;\n"])));
var SeedTeam = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  padding: 0.3rem 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 0.2em;\n  align-items: center;\n"])));
var SeedTime = styled.div(function (props) {
  return "\nmargin-top: 2px;\nfont-size: 12px;\ncolor: #8f8f8f;\nheight: 0;\n@media (max-width: " + props.mobileBreakpoint + "px) {\n  height:auto;\n}\n";
});
var SingleLineSeed = styled.div(function (props) {
  return "\npadding: 1em 1.5em;\nmin-width: 225px;\nwidth:100%;\nposition: relative;\ndisplay: flex;\nalign-items: center;\nflex: 0 1 auto;\nflex-direction: column;\njustify-content: center;\nfont-size: 14px;\n@media (max-width: " + props.mobileBreakpoint + "px) {\n  width:100%;\n}\n@media (min-width: " + ((props.mobileBreakpoint || 0) + 1) + "px) {\n  &::after {\n      content: \"\";\n      position: absolute;\n      height: 50%;\n      width: 3em;\n    [dir=\"rtl\"] & {\n      left: -1.5em;\n    }\n    [dir=\"ltr\"] & {\n      right: -1.5em;\n    }\n  }\n  &:nth-child(even)::after {\n    border-bottom: 1px solid #707070;\n    top: -0.5px;\n  }\n  &:nth-child(odd)::after {\n    border-top: 1px solid #707070;\n    top: calc(50% - 0.5px);\n  }\n}\n";
});
var Seed = styled.div(function (props) {
  return "\n  padding: 1em 1.5em;\n  min-width: 225px;\n  width:100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 0 1 auto;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  @media (max-width: " + props.mobileBreakpoint + "px) {\n    width:100%;\n  }\n  @media (min-width: " + ((props.mobileBreakpoint || 0) + 1) + "px) {\n    &::after {\n        content: \"\";\n        position: absolute;\n        height: 50%;\n        width: 1.5em;\n      [dir=\"rtl\"] & {\n        left: 0px;\n      }\n      [dir=\"ltr\"] & {\n        right: 0px;\n      }\n    }\n\n    &:nth-child(even)::before{\n      content:'';\n      border-top: 1px solid #707070;\n      position:absolute;\n      top: -0.5px;\n      width:1.5em;\n      [dir=\"rtl\"] & {\n        left:-1.5em;\n        }\n      [dir=\"ltr\"] & {\n        right:-1.5em;\n      }\n    }\n\n    &:nth-child(even)::after {\n      border-bottom: 1px solid #707070;\n      top: -0.5px;\n     [dir=\"rtl\"] & {\n        border-left: 1px solid #707070;\n        }\n      [dir=\"ltr\"] & {\n        border-right: 1px solid #707070;\n      }\n    }\n    &:nth-child(odd):not(:last-child)::after {\n      border-top: 1px solid #707070;\n      top: calc(50% - 0.5px);\n      [dir=\"rtl\"] & {\n        border-left: 1px solid #707070;\n        }\n      [dir=\"ltr\"] & {\n        border-right: 1px solid #707070;\n      }\n    }\n}\n";
});

var renderTitle = function renderTitle(title) {
  return React__default.createElement(RoundTitle, null, title);
};
var renderSeed = function renderSeed(_ref) {
  var _seed$teams, _seed$teams$, _seed$teams2, _seed$teams2$;
  var seed = _ref.seed,
    breakpoint = _ref.breakpoint;
  return React__default.createElement(Seed, {
    mobileBreakpoint: breakpoint
  }, React__default.createElement(SeedItem, null, React__default.createElement("div", null, React__default.createElement(SeedTeam, null, ((_seed$teams = seed.teams) === null || _seed$teams === void 0 ? void 0 : (_seed$teams$ = _seed$teams[0]) === null || _seed$teams$ === void 0 ? void 0 : _seed$teams$.name) || '-----------'), React__default.createElement(SeedTeam, null, ((_seed$teams2 = seed.teams) === null || _seed$teams2 === void 0 ? void 0 : (_seed$teams2$ = _seed$teams2[1]) === null || _seed$teams2$ === void 0 ? void 0 : _seed$teams2$.name) || '-----------'))), React__default.createElement(SeedTime, {
    mobileBreakpoint: breakpoint
  }, seed === null || seed === void 0 ? void 0 : seed.date));
};

var SingleElimination = function SingleElimination(_ref) {
  var rounds = _ref.rounds,
    _ref$rtl = _ref.rtl,
    rtl = _ref$rtl === void 0 ? false : _ref$rtl,
    roundClassName = _ref.roundClassName,
    bracketClassName = _ref.bracketClassName,
    _ref$mobileBreakpoint = _ref.mobileBreakpoint,
    mobileBreakpoint = _ref$mobileBreakpoint === void 0 ? 992 : _ref$mobileBreakpoint,
    _ref$renderSeedCompon = _ref.renderSeedComponent,
    renderSeedComponent = _ref$renderSeedCompon === void 0 ? renderSeed : _ref$renderSeedCompon,
    _ref$roundTitleCompon = _ref.roundTitleComponent,
    roundTitleComponent = _ref$roundTitleCompon === void 0 ? renderTitle : _ref$roundTitleCompon;
  var isResponsive = useMedia(mobileBreakpoint);
  var data = rounds.map(function (round, roundIdx) {
    return React__default.createElement(Round, {
      key: round.title,
      className: roundClassName,
      mobileBreakpoint: mobileBreakpoint
    }, round.title && roundTitleComponent(round.title, roundIdx), React__default.createElement(SeedsList, null, round.seeds.map(function (seed, idx) {
      return React__default.createElement(React.Fragment, {
        key: seed.id
      }, renderSeedComponent({
        seed: seed,
        breakpoint: mobileBreakpoint,
        roundIndex: roundIdx,
        seedIndex: idx,
        rounds: rounds
      }));
    })));
  });
  if (isResponsive) {
    return React__default.createElement(Bracket, {
      className: bracketClassName,
      dir: rtl ? "rtl" : "ltr",
      mobileBreakpoint: mobileBreakpoint
    }, data);
  }
  return React__default.createElement(Bracket, {
    className: bracketClassName,
    dir: rtl ? "rtl" : "ltr",
    mobileBreakpoint: mobileBreakpoint
  }, data);
};

exports.Bracket = SingleElimination;
exports.Seed = Seed;
exports.SeedItem = SeedItem;
exports.SeedTeam = SeedTeam;
exports.SeedTime = SeedTime;
exports.SingleLineSeed = SingleLineSeed;
//# sourceMappingURL=index.js.map
