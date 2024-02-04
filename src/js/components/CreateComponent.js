export default class CreateComponent {
  constructor(selector) {
    this._createElement(selector);
  }

  _createElement(value) {
    const element = document.createElement(value);
    element.classList.add(`${value}_validate`);
    this._element = element;
  }

  get element() {
    return this._element;
  }
}
