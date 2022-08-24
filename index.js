const Body = document.body;
const Head = document.head;
const JS = document.createElement("script")
const Css = document.createElement("style")
JS.setAttribute("id","CustomJSClass")
Css.setAttribute("id","CustomCssClass")



Body.appendChild(JS)
Head.appendChild(Css)



