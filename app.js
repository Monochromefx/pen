var Start, body, contextmenu, dropdown, head, header, imager, load, view;

({body, head} = document);

load = pen('<p>').id('loader');

pen(body).append(load);

load.html('loading...');

dropdown = function(btnhtml = 'button') {
  var j, len, prop;
  if (!(this instanceof dropdown)) {
    return new dropdown(btnhtml);
  }
  if (btnhtml instanceof dropdown) {
    for (j = 0, len = btnhtml.length; j < len; j++) {
      prop = btnhtml[j];
      this[prop] = btnhtml[prop];
    }
  } else {
    this.links = {};
    this.container = pen('<div class="dropdown">');
    this.button = pen('<button class="dropdown-button">').html(btnhtml);
    this.content = pen('<div class="dropdown-content">');
    this.container.append(this.button, this.content);
  }
};

dropdown.fn = dropdown.prototype = {
  constructor: dropdown
};

dropdown.prototype.addLink = function(name, link, desc = "no description") {
  var a, hr, min;
  a = pen('<a class="dropdown-content-link" href="' + link + '">').html(name + '<br>', {
    parse: true
  });
  min = pen('<span class="dropdown-content-link-location">').html(link + '<br>', {
    parse: true
  });
  min.appendTo(a);
  desc = pen('<span class="dropdown-content-link-location">').html(desc);
  desc.appendTo(a);
  hr = pen('<hr class="dropdown-content-divider">');
  this.links[name] = {};
  this.links[name].el = a;
  this.links[name].hr = hr;
  this.content.append(a, hr);
  return this;
};

dropdown.prototype.removeLink = function(name, fully = false) {
  this.links[name].el.remove();
  if (fully === true) {
    delete this.links[name];
  } else {
    null;
  }
  return this;
};

dropdown.prototype.deployTo = dropdown.prototype.deploy = function(element) {
  this.container.appendTo(element);
  return this;
};

dropdown.prototype.css = dropdown.prototype.style = function(element = String, ...optionsObject) {
  this[element].css([...optionsObject]);
  return this;
};

dropdown.prototype.embedInto = function(element) {
  return this.button.el.outerHTML + this.content.el.outerHTML;
};

view = (function(window, document, pen) {
  var Ghldnm;
  Ghldnm = void 0;
  view = function(holdername, views, classes) {
    var cls, ele, i, j, len, name, prop, setHTML;
    if (!(this instanceof view)) {
      return new view(holdername, views, classes);
    } else if (holdername instanceof view) {
      for (prop in holdernamme) {
        this[prop] = holdername[prop];
      }
    } else {
      Ghldnm = this.__G_HOLDER_NAME = holdername;
      this[holdername] = {};
      this.__classes = {};
      for (i = j = 0, len = views.length; j < len; i = ++j) {
        view = views[i];
        ({name, ele} = view);
        if (type(ele) === 'string') {
          ele = pen(ele);
        }
        if (view.setHTML != null) {
          setHTML = view.setHTML;
          ele.html(setHTML);
        }
        if (view.important != null) {
          if (view.important === true) {
            this.important = this.main = ele;
          }
        }
        this[name] = ele;
      }
      for (cls in classes) {
        this.__classes[cls] = classes[cls];
      }
    }
    view.prototype[`remove${self.__G_HOLDER_NAME}`] = function(name, fully) {
      var self;
      self = this;
      pen(self[self.__G_HOLDER_NAME][name]).remove();
      if (fully === true) {
        delete self[self.__G_HOLDER_NAME][name];
      } else {
        void 0;
      }
      return self;
    };
  };
  view.fn = view.prototype = {
    constructor: view
  };
  view.prototype.add = function(name, options, ohr = false) {
    var evalCls, self, temp;
    evalCls = function() {
      if (options.extraClasses != null) {
        return options.extraClasses.split(/\s+/gi).join(' ');
      } else {
        return void 0;
      }
    };
    self = this;
    temp = void 0;
    if (ohr !== false) {
      self[self.__G_HOLDER_NAME][name] = {};
      self[self.__G_HOLDER_NAME][name].el = void 0;
      self[self.__G_HOLDER_NAME][name].hr = pen(`<br class='${self.__classes.priorityName}-divider'>`);
    }
    if (options.event != null) {
      temp = pen(`<span align='center' class='${self.__classes.main} ${self.__classes.type['button']} ${evalCls()}`).html(options.text).on("click", options.event);
    } else if (options.link != null) {
      temp = pen(`<span align='center' class='${self.__classes.main} ${self.__classes.type['link']} ${evalCls()}'`).html(options.text).href(options.link);
    } else if (options.custom != null) {
      temp = pen(`<sapn align='center' class='${self.__classes.main} custom ${evalCls()}'>`);
    }
    if (ohr !== false) {
      self[self.___G_HOLDER_NAME][name].el = temp;
    } else {
      self[self.___G_HOLDER_NAME][name] = temp;
    }
    return self;
  };
  view.prototype.init = function() {
    console.log("you'll need to create this yourself");
  };
  view.prototype.deploy = function(element) {
    var self;
    self = this;
    pen(element).append(self.important);
    return self;
  };
  if (typeof module !== "undefined" && module !== null) {
    if (module.exports != null) {
      module.exports = view;
    } else {
      window.view = view;
    }
  }
  return view;
})(window, document, pen);

contextmenu = {
  commands: {},
  menu: pen('<div class="contextmenu">').attr('align', 'center'),
  add: function(name, evhr, commandType = "button", el) {
    var hr, self, temp;
    el = `<${el}>`;
    self = contextmenu;
    hr = pen('<hr class="contextmenu-divider">');
    if (commandType.match(/link/gi)) {
      temp = pen('<a href="' + evhr + '" class="contextmenu-command link">').html(name);
    } else if (commandType.match(/button/gi)) {
      temp = pen('<span class="contextmenu-command">').on('click', evhr).html(name);
    } else if (commandType.match(/custom/gi)) {
      if (type(evhr) === 'function') {
        temp = pen(el).on('click', evhr).html(name).class('contextmenu-command custom');
      } else {
        temp = pen(el).href(evhr).html(name).class('contextmenu-command custom');
      }
    }
    self.commands[name] = {};
    self.commands[name].el = temp;
    self.commands[name].hr = hr;
    self.menu.append(self.commands[name].el, self.commands[name].hr);
    return self;
  },
  removeCommand: function(name, fully = false) {
    var self;
    self = contextmenu;
    self.commands[name].el.remove();
    self.commands[name].hr.remove();
    if (fully === true) {
      delete self.commands[name];
    } else {
      void 0;
    }
    return self;
  },
  remove: function() {
    var name, self;
    self = contextmenu;
    for (name in self.commands) {
      self.removeCommand(name);
    }
    return self;
  },
  init: function(e) {
    var name, self;
    self = contextmenu;
    self.menu.css({
      top: `${e.clientY}px`,
      left: `${e.clientX}px`
    });
    for (name in self.commands) {
      self.menu.append(self.commands[name].el.element, self.commands[name].hr.element);
    }
    addEventListener('click', self.remove, {
      once: true
    });
    pen(body).append(self.menu);
    return self;
  }
};

header = {
  buttons: {},
  head: pen('<div class="header">'),
  title: pen('<span class="title Lil">').html(document.title),
  add: function(name, evhr, buttonType = "button", el) {
    var self, temp;
    el = `<${el}>`;
    console.log(name);
    self = header;
    if (evhr instanceof dropdown) {
      temp = pen('<span align="center" class="header-button dropdown Ril">').html(evhr.button.element.outerHTML + evhr.content.element.outerHTML, {
        parse: true
      });
      self.buttons[name] = temp;
      return self;
    }
    if (buttonType.match(/link/gi)) {
      temp = pen('<a class="header-button link Ril" href="' + evhr + '">').html(name);
    } else if (buttonType.match(/button/gi)) {
      temp = pen('<span class="header-button Ril">').on('click', evhr).html(name);
    } else if (buttonType.match(/custom/gi)) {
      if (type(evhr) === 'function') {
        temp = pen(el).on('click', evhr).html(name).class('header-button custom Ril');
      } else {
        temp = pen(el).href(evhr).html(name).class('header-button custom Ril');
      }
    }
    self.commands[name] = temp;
    return self;
  },
  removeButton: function(name, fully) {
    var self;
    self = header;
    pen(self.buttons[name]).remove();
    if (fully === true) {
      delete self.buttons[name];
    } else {
      void 0;
    }
    return self;
  },
  init: function() {
    var brs, i, j, name, self;
    self = header;
    pen(self.head).append(self.title);
    for (name in self.buttons) {
      pen(self.head).append(self.buttons[name]);
    }
    pen(body).append(self.head);
    brs = [];
    for (i = j = 0; j <= 3; i = ++j) {
      brs[i] = pen('<br>').el;
      body.insertBefore(brs[i], body.childNodes[0]);
    }
    return self;
  }
};

imager = function(src, alt, msg = "no message was set") {
  var ion, prop;
  ion = (src, alt, msg) => {
    this.container = pen("<div class='image-view'>");
    this.link = pen(`<a href='${src}'>`);
    this.image = pen(`<img src='${src}' class='image-view-image' alt='${alt}'>`);
    this.title = pen("<span class='image-view-title'>").html(alt);
    this.br = pen("<br class='image-breaker'>");
    this.msg = pen("<span class='image-view-message'>").html(msg);
    return this.link.append(this.title, this.br, this.msg, this.image).appendTo(this.container);
  };
  if (!(this instanceof imager)) {
    return new imager(src, alt, msg);
  } else if (src instanceof imager) {
    for (prop in src) {
      this[prop] = src[prop];
    }
  } else {
    ion(src, alt, msg);
  }
};

imager.fn = imager.prototype = {
  constructor: imager
};

imager.prototype.changeTitle = function(str) {
  this.title.html(str);
  this.image.attr("alt", str);
  return this;
};

imager.prototype.deploy = imager.deployTo = function(element) {
  pen(element).append(this.container);
  return this;
};

Start = function(e) {
  var init, mouseCl, mouseOu, mouseOv, penImage, projects, usualgit;
  contextmenu.add('reload', function(e) {
    e.preventDefault();
    pen(load).html('reloading...');
    location.reload();
  }).add('go back', function(e) {
    e.preventDefault();
    pen(load).html('going back...');
    history.back();
  }).add('go forward', function(e) {
    e.preventDefault();
    pen(load).html('going foward...');
    history.forward();
  }).add('github repo', function(e) {
    e.preventDefault();
    pen(load).html('going to github repo...');
    location.href = 'http://github.com/Monochromefx/pen';
  });
  addEventListener('contextmenu', function(e) {
    var first;
    first = e.path[0];
    if ('tagName' in first) {
      switch (first.tagName.toLowerCase()) {
        case 'img':
          contextmenu.add('go to href', pen(first).src(), 'link');
      }
    }
    e.preventDefault();
    contextmenu.init(e);
  });
  usualgit = "https://github.com/Monochromefx";
  projects = dropdown('projects').addLink("Pen", `${usualgit}/pen`, 'This project').addLink("Schem", `${usualgit}/schem`, 'a multipurpose electron app').addLink("Meso", `${usualgit}/meso`, 'a lightweight javascript in-browser source code editor');
  header.add('pjdropdown', projects);
  header.init();
  mouseOv = function(e) {
    pen(this).html('<br>want to remove this message?, if so just click me', {
      app: true,
      parse: true
    });
  };
  init = `load took ${Date.now() - timestamp} seconds`;
  mouseOu = function(e) {
    pen(this).html(init);
  };
  mouseCl = function(e) {
    pen(this).remove();
  };
  load.html(init);
  load.on("mouseover", mouseOv);
  load.on("mouseout", mouseOu);
  load.on("click", mouseCl);
  penImage = imager("pen.logo.png", "Pen", "the official logo");
  penImage.deploy(body);
};

pen(document).ready(function(e) {
  return Start(e);
});
