const Body = document.body;
const Head = document.head;
const JS = document.createElement("script")
const Css = document.createElement("link")
const CSSLink = ""
const JSLink = ""

JS.setAttribute("id","CustomJSClass")
Css.setAttribute("id","CustomCssClass")
Css.setAttribute("rel","stylesheet")
Css.setAttribute("href",CSSLink)
JS.setAttribute("src",JSLink)
Body.appendChild(JS)
Head.appendChild(Css)



