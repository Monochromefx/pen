// Generated by CoffeeScript 2.0.0-alpha1
(function() {
  var Start, body, cntmnu, commands, dir, error, head, log;
  log = console.log, error = console.error, dir = console.dir;
  body = document.body, head = document.head;
  commands = {};
  cntmnu = function(e) {
    var Remove, addCommand, cntmn, removeCommand;
    e.preventDefault();
    cntmn = pen("div").Class("contextmenu").Css({
      top: `${e.clientY}px`,
      left: `${e.clientX}px`,
      position: "fixed",
      'z-index': 9999
    }).pesh;
    addCommand = function(view, event) {
      commands[view] = {
        el: pen("span").Html(view).Class("contextmenu-command").On("click", event).pesh,
        hr: pen("hr").Class("contextmenu-divider").pesh
      };
      pen(cntmn).Append(commands[view].el, commands[view].hr);
    };
    removeCommand = function(name) {
      pen(commands[name].el).Remove();
      pen(commands[name].hr).Remove();
      delete commands[name];
    };
    Remove = function() {
      var name;
      for (name in commands) {
        removeCommand(name);
      }
      pen(cntmn).Remove();
      return pen(window).removeEventListener("click", Remove);
    };
    pen(window).On("click", Remove);
    addCommand("reload", function() {
      return location.reload();
    });
    pen(cntmn).AppendTo(body);
    return cntmn;
  };
  Start = function(e) {
    var closer, header, title;
    pen(window).On("contextmenu", cntmnu);
    header = pen("div").Class("header-title").pesh;
    title = pen("span").Class("title").Html(document.title).pesh;
    closer = pen("span").Class("header-button Ril").Html("X").pesh;
    pen(header).Append(title, closer).AppendTo(body);
    return log(`load took ${Math.round(e.timeStamp)} second(s)`);
  };
  return window.onload = Start;
})();
