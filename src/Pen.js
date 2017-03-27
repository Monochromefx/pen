// Generated by CoffeeScript 2.0.0-alpha1
var Pen, body, doc, head, log;

log = console.log;

doc = document;

if (doc.body != null) {
  body = doc.body;
} else {
  alert("Body is not defined in the html document.");
}

if (doc.head != null) {
  head = doc.head;
} else {
  alert("Head is not defined in the html document.");
}

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

  select(txt) {
    return doc.querySelector(txt);
  }

  selectAll(txt) {
    return doc.querySelectorAll(txt);
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
      if (typeof oel === 'function') {
        return el.appendChild(oel(el));
      } else {
        el.appendChild(oel);
        return el;
      }
    }
  }

  createAppend(el) {
    el = this.create(el);
    return this.autoAppend(el);
  }


  /*
   * ^^^^^
   * Helpers
   * -------
   * Handlers
   * vvvvv
   */

  objHandler(el, obj, txt) {
    el.innerHTML = txt != null ? txt : '';
    el.title = obj.title != null ? obj.title : '';
    el.style = obj.style != null ? obj.style : '';
    el.id = obj.id != null ? obj.id : '';
    el.onclick = obj.click != null ? obj.click : '';
    el.classList += obj["class"] != null ? obj["class"] : '';
    return el;
  }

  areaHandler(el, obj, txt) {
    el = this.objHandler(el, obj, txt);
    el.width = obj.width != null ? obj.click : '';
    el.height = obj.height != null ? obj.height : '';
    return el;
  }

  inputHandler(el, obj, type, txt) {
    el = this.objHandler(el, obj);
    el.value = txt != null ? txt : '';
    el.type = obj.type != null ? obj.type : '';
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

  automaticInputHandler(el, type, txt, obj) {
    el = this.create(el);
    el = this.inputHandler(el, obj, type, txt);
    return this.autoAppend(el);
  }

  automaticAreaHandler(el, txt, obj) {
    el = this.create(el);
    el = this.areaHandler(el, obj, txt);
    return this.autoAppend(el);
  }


  /*
   * ^^^^^
   * Handlers
   * -------
   * Methods
   * vvvvv
   */

  Html(el, txt) {
    if (typeof txt === 'object') {
      JSON.parse(txt);
    }
    if (typeof txt === 'function') {
      txt = txt(el);
    }
    el.innerHTML = txt;
  }

  Css(el, txt) {
    el.style = txt;
  }

  Id(el, txt) {
    el.id = txt;
  }

  Type(el, txt) {
    el.type = txt;
  }


  /*
   * ^^^^^
   * Methods
   * -------
   * Tags
   * vvvvv
   */

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

  legend(obj, txt) {
    return this.automaticHandler('legend', txt, obj);
  }

  form(obj, txt, oel) {
    return this.automaticHandler('form', txt, obj, oel);
  }

  fieldset(obj, txt, oel) {
    return this.automaticHandler('fieldset', txt, obj, oel);
  }

  input(obj, type, txt) {
    return this.automaticInputHandler('input', type, txt, obj);
  }

  button(obj, txt) {
    return this.automaticHandler('button', txt, obj);
  }

  abbr(obj, txt) {
    return this.automaticHandler('abbr', txt, obj);
  }

  style(txt, obj) {
    return this.automaticHandler('style', txt, obj);
  }

  script(txt, obj) {
    return this.automaticHandler('script', txt, obj);
  }

  canvas(obj, txt) {
    return this.automaticHandler('canvas', txt, obj);
  }

};
