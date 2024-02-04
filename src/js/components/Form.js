import CreateComponent from "./CreateComponent";

export default class Form {
  constructor() {
    this._createForm();
  }

  _createForm() {
    this.form = new CreateComponent("form").element;
    this.input = new CreateComponent("input").element;
    this.button = new CreateComponent("button").element;
    this.button.textContent = "Click to Validate";

    this.form.appendChild(this.input);
    this.form.appendChild(this.button);

    this._element = this.form;
  }

  get element() {
    return this._element;
  }
}
