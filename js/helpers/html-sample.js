function createHTMLSample(element, code) {
  let parsed = code.replace("<", "&lt;").replace(">", "&gt;").replace("&", "&amp;").replace("\"", "&quot;").replace("\'", "&apos;");
  let pre = document.createElement("PRE");
  pre.innerHTML = parsed;
  element.appendChild(pre);
}
