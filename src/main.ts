/* Entry point: styles, nav build, router start. */
import './styles.css';
import {buildNav} from './nav';
import {route} from './router';
import {initForms} from './forms';

buildNav();
initForms();
window.addEventListener('hashchange',route);
route();
