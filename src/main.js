import './views/brief-view';
import './views/filter-view';
import './views/add-button-view';
import './views/sort-view';
import './views/list-view';

import BriefPresenter from './presenters/brief-presenter';
import FilterPresenter from './presenters/filter-presenter';
import AddButtonPresenter from './presenters/add-button-presenter';
import SortPresenter from './presenters/sort-presenter';
import ListPresenter from './presenters/list-presenter';

import AppModel from './models/app-model';

const appModel = new AppModel();

appModel.ready().then(() => {
  new BriefPresenter(document.querySelector('brief-view'), appModel);
  new FilterPresenter(document.querySelector('filter-view'), appModel);
  new AddButtonPresenter(document.querySelector('add-button-view'), appModel);
  new SortPresenter(document.querySelector('sort-view'), appModel);
  new ListPresenter(document.querySelector('list-view'), appModel);
});
