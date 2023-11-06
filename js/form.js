import { isEmailValid } from "./helpers.js";
import Api from "../api/index.js";

class Form {
  /**
   *
   * @param {string} formSelector
   * @param {HTMLElement} messagePopup
   */
  constructor(formSelector, messagePopup) {
    this.formSelector = formSelector;
    this.form = document.querySelector(formSelector);
    this.fields = this.form.querySelectorAll(
      "input:not([type='checkbox']), textarea"
    );
    this.checkBox = this.form.querySelector("input[type='checkbox']");
    this.messagePopup = messagePopup ? messagePopup : null;

    this.checkBox.addEventListener("change", this.checkPrivacy);
    this.fields.forEach((field) =>
      field.addEventListener("input", this.resetFieldErrors.bind(this, field))
    );
    this.form.addEventListener("submit", this.submitForm.bind(this));
  }

  resetFieldErrors(field) {
    const parentNode = field.closest(`${this.formSelector}-field-wrap`);
    parentNode.classList.remove("invalid-field");
    parentNode.classList.remove("invalid-email");
  }

  isFieldEmpty(field) {
    const parentNode = field.closest(`${this.formSelector}-field-wrap`);
    parentNode.classList.remove("invalid-field");

    if (!field.value.trim()) {
      parentNode.classList.add("invalid-field");
      return true;
    }
    return false;
  }

  isEmailValid(emailField) {
    const parentNode = emailField.closest(`${this.formSelector}-field-wrap`);
    parentNode.classList.remove("invalid-email");

    if (!isEmailValid(emailField.value)) {
      parentNode.classList.add("invalid-email");
      return false;
    }
    return true;
  }

  isValid() {
    const notValidFields = [...this.fields].filter((field) =>
      this.isFieldEmpty(field)
    ).length;

    const emailField = this.form.querySelector("input[type=email]");
    if (!this.isEmailValid(emailField)) {
      return false;
    }

    if (notValidFields !== 0) return false;

    return true;
  }

  clearFields() {
    this.fields.forEach((field) => (field.value = ""));
  }

  buildErrorMessage(fields) {
    let errorText = "Please check that the following fields are correct:\n\n";
    for (let [key, value] of Object.entries(fields)) {
      errorText += value + "\n\n";
    }
    return errorText;
  }

  checkPrivacy() {
    const btn = this.form.querySelector(".form-section__form-submit");
    this.checked
      ? btn.removeAttribute("disabled")
      : btn.setAttribute("disabled", "disabled");
  }

  async submitForm(e) {
    e.preventDefault();
    if (!this.isValid()) return;

    const body = {
      name: this.form.name.value,
      email: this.form.email.value,
      tel: this.form.tel.value,
      msg: this.form.msg.value,
    };

    const result = await Api.registration(body);

    if (result) {
      this.clearFields();

      if (this.messagePopup) {
        this.messagePopup
          .setMessage("SUCCESS", "Your message is submitted", "SUCCESS")
          .show();
      }
    } else {
      if (this.messagePopup) {
        const errorText = this.buildErrorMessage(body);
        this.messagePopup.setMessage("ERROR", errorText, "ERROR").show();
      }
    }
  }
}

export default Form;
