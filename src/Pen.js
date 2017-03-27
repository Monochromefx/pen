// Generated by CoffeeScript 2.0.0-alpha1
var Pen, body, doc, head, log;

log = console.log;

doc = document;

body = doc.body, head = doc.head;

Pen = class Pen {
  constructor(auto) {
    this.auto = auto;
  }

  create(el) {
    return doc.createElement(el);
  }

  getIdOf(el) {
    return doc.getElementById(el);
  }

  getNameOf(el) {
    return doc.getElementsByName(el);
  }

  getClassOf(el) {
    return doc.getElementsByClassName(el);
  }

  getTagsOf(el) {
    return doc.getElementsByTagName(el);
  }

  checker() {
    if (this.auto === true) {
      return true;
    } else {
      return false;
    }
  }

  autoAppend(el) {
    if (this.checker() === true) {
      body.appendChild(el);
      return el;
    } else {
      return el;
    }
  }

  oEl(el, oel) {
    if (!oel) {
      return el;
    } else {
      el.appendChild(oel);
      return el;
    }
  }

  objHandler(el, obj, txt) {
    el.innerHTML = txt != null ? txt : '';
    el.title = obj.title != null ? obj.title : '';
    el.style = obj.style != null ? obj.style : '';
    el.id = obj.id != null ? obj.id : '';
    el.classList += obj["class"] != null ? obj["class"] : '';
    return el;
  }

  linkAndSourceHandler(el, obj, txt, type) {
    el = this.objHandler(el, obj, txt);
    if (type.match(/link|href/gi)) {
      el.href = (function() {
        if (obj.href != null) {
          return obj.href;
        } else {
          throw new Error("'href' must be defined in the object parameter");
        }
      })();
    } else if (type.match(/source|src/gi)) {
      el.src = (function() {
        if (obj.src != null) {
          return obj.src;
        } else {
          throw new Error("'src' must be defined in the object parameter");
        }
      })();
    }
    return el;
  }

  automaticHandler(el, txt, obj, oel) {
    el = this.create(el);
    el = this.objHandler(el, obj, txt);
    if (oel) {
      el = this.oEl(el, oel);
    }
    return this.autoAppend(el);
  }

  automaticLinkHandler(el, type, txt, obj, oel) {
    el = this.create(el);
    el = this.linkAndSourceHandler(el, obj, txt, type);
    if (oel) {
      el = this.oEl(el, oel);
    }
    return this.autoAppend(el);
  }

  p(txt, obj) {
    return this.automaticHandler('p', txt, obj);
  }

  div(obj, txt, oel) {
    return this.automaticHandler('div', txt, obj, oel);
  }

  span(obj, txt, oel) {
    return this.automaticHandler('span', txt, obj, oel);
  }

  a(obj, txt, oel) {
    return this.automaticLinkHandler('a', "href", txt, obj, oel);
  }

  ul(obj, txt, oel) {
    return this.automaticHandler('ul', txt, obj, oel);
  }

  li(obj, txt, oel) {
    return this.automaticHandler('li', txt, obj, oel);
  }

  code(obj, txt) {
    return this.automaticHandler('code', txt, obj);
  }

  pre(obj, txt) {
    return this.automaticHandler('pre', txt, obj);
  }

  label(obj, txt) {
    return this.automaticHandler('label', txt, obj);
  }

  legend(ob, txt) {
    return this.automaticHandler('legend', txt, obj);
  }

};
