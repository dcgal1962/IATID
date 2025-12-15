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

  // Create a unique session id if missing
  var sid = p.GetVar("v_sessionId");
  if (!sid) {
    sid = "LE-" + new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14) + "-" + Math.random().toString(16).slice(2, 8);
    p.SetVar("v_sessionId", sid);
  }

  // Optional: update lastEvent so it shows on your dashboard
  try { p.SetVar("v_lastEvent", "Session Initialized"); } catch(e) {}

  var payload = {
    type: "xapi",
    statement: {
      actor: {
        name: "Portfolio Learner",
        mbox: "mailto:azwebproducer@gmail.com"
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
          "https://jtld.example/xapi/ext/sessionId": sid
        }
      },
      timestamp: new Date().toISOString()
    }
  };

  window.parent.postMessage(payload, "*");
})();

}

};
