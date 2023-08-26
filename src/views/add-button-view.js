import View from './view';
import { html } from '@src/utilities';

class AddButtonView extends View {
  /**
   * @override
   */
  createHtml() {
    return html`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `;
  }
}

customElements.define('add-button-view', AddButtonView);

export default AddButtonView;
