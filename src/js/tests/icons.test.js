/**
 * @jest-environment jsdom
 */

import App from '../App';
const app = new App();
app.drawContainer();

const input = app.form.input;
const submitBtn = app.form.button;

describe('Function validator change DOM', () => {

  it.each([
    ['.icon_visa', 'change', true],
    ['.icon_masterCard', 'not change', false],
    ['.icon_discover', 'not change', false],
    ['.icon_amex', 'not change', false],
    ['.icon_mir', 'not change', false],
  ])('class of %s should %s', (element, _, boolean) => {
    input.value = '4716 4403 2731 8585';
    submitBtn.click();
    expect(document.querySelector(element).classList.contains('icon_active')).toEqual(boolean);
  })


  it.each([
    ['.icon_visa', false],
    ['.icon_masterCard', false],
    ['.icon_discover', false],
    ['.icon_amex', false],
    ['.icon_mir', false],
  ])('class of %s should not change', (element, boolean) => {
    input.value = '4716 5403 2731 8585';
    submitBtn.click();
    expect(document.querySelector(element).classList.contains('icon_inactive')).toEqual(boolean);
  })

})