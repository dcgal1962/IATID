window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  (function () {
  var p = GetPlayer();

  var statement = {
    type: "xapi",
    statement: {
      actor: {
        name: "Portfolio Learner",
        mbox: "mailto:portfolio.learner@example.com"
      },
      verb: {
        id: "https://w3id.org/xapi/adl/verbs/initialized",
        display: { "en-US": "initialized" }
      },
      object: {
        id: window.location.href + "#learning-experience",
        definition: {
          name: { "en-US": "Learning Engineer Demonstration Module" },
          type: "https://w3id.org/xapi/activities/course"
        }
      },
      result: {
        extensions: {
          "https://jtld.example/xapi/ext/sessionId": p.GetVar("v_sessionId")
        }
      },
      timestamp: new Date().toISOString()
    }
  };

  window.parent.postMessage(statement, "*");
})();

}

};
