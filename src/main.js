import './views/brief-view';
import './views/filter-view';
import './views/add-button-view';

/**
 * @type {import("./views/brief-view").default}
 */
const briefView = document.querySelector('brief-view');

/**
 * @type {import("./views/brief-view").default}
 */
const filterView = document.querySelector('filter-view');

/**
 * @type {import("./views/add-button-view").default}
 */
const addButtonView = document.querySelector('add-button-view');

briefView.render();
filterView.render();
addButtonView.render();
