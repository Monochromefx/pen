var Start,body,contextmenu,dropdown,head,header,imager,load,view;({body:body,head:head}=document),load=pen("<p>").id("loader"),pen(body).append(load),load.html("loading..."),(dropdown=function(e="button"){var t,n,o;if(!(this instanceof dropdown))return new dropdown(e);if(e instanceof dropdown)for(t=0,n=e.length;t<n;t++)this[o=e[t]]=e[o];else this.links={},this.container=pen('<div class="dropdown">'),this.button=pen('<button class="dropdown-button">').html(e),this.content=pen('<div class="dropdown-content">'),this.container.append(this.button,this.content)}).fn=dropdown.prototype={constructor:dropdown},dropdown.prototype.addLink=function(e,t,n="no description"){var o,i;return o=pen('<a class="dropdown-content-link" href="'+t+'">').html(e+"<br>",{parse:!0}),pen('<span class="dropdown-content-link-location">').html(t+"<br>",{parse:!0}).appendTo(o),(n=pen('<span class="dropdown-content-link-location">').html(n)).appendTo(o),i=pen('<hr class="dropdown-content-divider">'),this.links[e]={},this.links[e].el=o,this.links[e].hr=i,this.content.append(o,i),this},dropdown.prototype.removeLink=function(e,t=!1){return this.links[e].el.remove(),!0===t&&delete this.links[e],this},dropdown.prototype.deployTo=dropdown.prototype.deploy=function(e){return this.container.appendTo(e),this},dropdown.prototype.css=dropdown.prototype.style=function(e=String,...t){return this[e].css([...t]),this},dropdown.prototype.embedInto=function(e){return this.button.el.outerHTML+this.content.el.outerHTML},view=function(e,t,n){var o;return o=void 0,view=function(e,t,i){var r,a,s,d,l,c,p,m;if(!(this instanceof view))return new view(e,t,i);if(e instanceof view)for(p in holdernamme)this[p]=e[p];else{for(o=this.__G_HOLDER_NAME=e,this[e]={},this.__classes={},s=d=0,l=t.length;d<l;s=++d)view=t[s],({name:c,ele:a}=view),"string"===type(a)&&(a=n(a)),null!=view.setHTML&&(m=view.setHTML,a.html(m)),null!=view.important&&!0===view.important&&(this.important=this.main=a),this[c]=a;for(r in i)this.__classes[r]=i[r]}view.prototype[`remove${self.__G_HOLDER_NAME}`]=function(e,t){var o;return o=this,n(o[o.__G_HOLDER_NAME][e]).remove(),!0===t&&delete o[o.__G_HOLDER_NAME][e],o}},view.fn=view.prototype={constructor:view},view.prototype.add=function(e,t,o=!1){var i,r,a;return i=function(){return null!=t.extraClasses?t.extraClasses.split(/\s+/gi).join(" "):void 0},r=this,a=void 0,!1!==o&&(r[r.__G_HOLDER_NAME][e]={},r[r.__G_HOLDER_NAME][e].el=void 0,r[r.__G_HOLDER_NAME][e].hr=n(`<br class='${r.__classes.priorityName}-divider'>`)),null!=t.event?a=n(`<span align='center' class='${r.__classes.main} ${r.__classes.type.button} ${i()}`).html(t.text).on("click",t.event):null!=t.link?a=n(`<span align='center' class='${r.__classes.main} ${r.__classes.type.link} ${i()}'`).html(t.text).href(t.link):null!=t.custom&&(a=n(`<sapn align='center' class='${r.__classes.main} custom ${i()}'>`)),!1!==o?r[r.___G_HOLDER_NAME][e].el=a:r[r.___G_HOLDER_NAME][e]=a,r},view.prototype.init=function(){console.log("you'll need to create this yourself")},view.prototype.deploy=function(e){var t;return t=this,n(e).append(t.important),t},"undefined"!=typeof module&&null!==module&&(null!=module.exports?module.exports=view:e.view=view),view}(window,document,pen),contextmenu={commands:{},menu:pen('<div class="contextmenu">').attr("align","center"),add:function(e,t,n="button",o){var i,r,a;return o=`<${o}>`,r=contextmenu,i=pen('<hr class="contextmenu-divider">'),n.match(/link/gi)?a=pen('<a href="'+t+'" class="contextmenu-command link">').html(e):n.match(/button/gi)?a=pen('<span class="contextmenu-command">').on("click",t).html(e):n.match(/custom/gi)&&(a="function"===type(t)?pen(o).on("click",t).html(e).class("contextmenu-command custom"):pen(o).href(t).html(e).class("contextmenu-command custom")),r.commands[e]={},r.commands[e].el=a,r.commands[e].hr=i,r.menu.append(r.commands[e].el,r.commands[e].hr),r},removeCommand:function(e,t=!1){var n;return(n=contextmenu).commands[e].el.remove(),n.commands[e].hr.remove(),!0===t&&delete n.commands[e],n},remove:function(){var e,t;t=contextmenu;for(e in t.commands)t.removeCommand(e);return t},init:function(e){var t,n;(n=contextmenu).menu.css({top:`${e.clientY}px`,left:`${e.clientX}px`});for(t in n.commands)n.menu.append(n.commands[t].el.element,n.commands[t].hr.element);return addEventListener("click",n.remove,{once:!0}),pen(body).append(n.menu),n}},header={buttons:{},head:pen('<div class="header">'),title:pen('<span class="title Lil">').html(document.title),add:function(e,t,n="button",o){var i,r;return o=`<${o}>`,console.log(e),i=header,t instanceof dropdown?(r=pen('<span align="center" class="header-button dropdown Ril">').html(t.button.element.outerHTML+t.content.element.outerHTML,{parse:!0}),i.buttons[e]=r,i):(n.match(/link/gi)?r=pen('<a class="header-button link Ril" href="'+t+'">').html(e):n.match(/button/gi)?r=pen('<span class="header-button Ril">').on("click",t).html(e):n.match(/custom/gi)&&(r="function"===type(t)?pen(o).on("click",t).html(e).class("header-button custom Ril"):pen(o).href(t).html(e).class("header-button custom Ril")),i.commands[e]=r,i)},removeButton:function(e,t){var n;return n=header,pen(n.buttons[e]).remove(),!0===t&&delete n.buttons[e],n},init:function(){var e,t,n,o,i;i=header,pen(i.head).append(i.title);for(o in i.buttons)pen(i.head).append(i.buttons[o]);for(pen(body).append(i.head),e=[],t=n=0;n<=3;t=++n)e[t]=pen("<br>").el,body.insertBefore(e[t],body.childNodes[0]);return i}},(imager=function(e,t,n="no message was set"){var o,i;if(o=((e,t,n)=>{this.container=pen("<div class='image-view'>");this.link=pen(`<a href='${e}'>`);this.image=pen(`<img src='${e}' class='image-view-image' alt='${t}'>`);this.title=pen("<span class='image-view-title'>").html(t);this.br=pen("<br class='image-breaker'>");this.msg=pen("<span class='image-view-message'>").html(n);return this.link.append(this.title,this.br,this.msg,this.image).appendTo(this.container)}),!(this instanceof imager))return new imager(e,t,n);if(e instanceof imager)for(i in e)this[i]=e[i];else o(e,t,n)}).fn=imager.prototype={constructor:imager},imager.prototype.changeTitle=function(e){return this.title.html(e),this.image.attr("alt",e),this},imager.prototype.deploy=imager.deployTo=function(e){return pen(e).append(this.container),this},Start=function(e){var t,n,o,i,r,a;contextmenu.add("reload",function(e){e.preventDefault(),pen(load).html("reloading..."),location.reload()}).add("go back",function(e){e.preventDefault(),pen(load).html("going back..."),history.back()}).add("go forward",function(e){e.preventDefault(),pen(load).html("going foward..."),history.forward()}).add("github repo",function(e){e.preventDefault(),pen(load).html("going to github repo..."),location.href="http://github.com/Monochromefx/pen"}),addEventListener("contextmenu",function(e){var t;if("tagName"in(t=e.path[0]))switch(t.tagName.toLowerCase()){case"img":contextmenu.add("go to href",pen(t).src(),"link")}e.preventDefault(),contextmenu.init(e)}),a="https://github.com/Monochromefx",r=dropdown("projects").addLink("Pen",`${a}/pen`,"This project").addLink("Schem",`${a}/schem`,"a multipurpose electron app").addLink("Meso",`${a}/meso`,"a lightweight javascript in-browser source code editor"),header.add("pjdropdown",r),header.init(),i=function(e){pen(this).html("<br>want to remove this message?, if so just click me",{app:!0,parse:!0})},t=`load took ${Date.now()-timestamp} seconds`,o=function(e){pen(this).html(t)},n=function(e){pen(this).remove()},load.html(t),load.on("mouseover",i),load.on("mouseout",o),load.on("click",n),imager("pen.logo.png","Pen","the official logo").deploy(body)},pen(document).ready(function(e){return Start(e)});