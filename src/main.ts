/* Entry point: styles, nav build, router start. */
import './styles.css';
import {buildNav} from './nav';
import {initRouter} from './router';
import {initForms} from './forms';

buildNav();
initForms();
initRouter();
