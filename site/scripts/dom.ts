const nodeListToArray = (nodes: NodeList) => Array.from(nodes);

const isElement = (node: Node): node is Element => {
  return node instanceof Element;
};

export const select = (selector: string) => {
  return nodeListToArray(document.querySelectorAll(selector)).filter(isElement);
};

export const selectChildren = (elem: Element, selector: string) => {
  return nodeListToArray(elem.querySelectorAll(selector)).filter(isElement);
};

export const hasClass = (elem: Element, className: string) => {
  return elem.classList.contains(className);
};

export const addClass = (elem: Element, className: string) => {
  return elem.classList.add(className);
};

export const removeClass = (elem: Element, className: string) => {
  return elem.classList.remove(className);
};

export const hasAttr = (elem: Element, attrName: string) => {
  return elem.hasAttribute(attrName);
};

export const getAttr = (elem: Element, attrName: string) => {
  return elem.getAttribute(attrName);
};

export const setAttr = (elem: Element, attrName: string, value: string) => {
  return elem.setAttribute(attrName, value);
};

export const removeAttr = (elem: Element, attrName: string) => {
  return elem.removeAttribute(attrName);
};
