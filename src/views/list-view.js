import './list-view.css';

import View from './view.js';

import CardView from './card-view';
import EditorView from './editor-view';

class ListView extends View {
  constructor() {
    super();

    this.classList.add('trip-list');
    this.setAttribute('role', 'list');
  }

  /**
   * @override
   */
  render() {
    const views = Array.from({ length: 4 }, (_, idx) => {
      const view = idx === 0 ? new EditorView() : new CardView();

      view.classList.add('trip-list__item');
      view.role = 'listitem';

      view.render();

      return view;
    });

    this.replaceChildren(...views);
  }
}

customElements.define('list-view', ListView);

export default ListView;
