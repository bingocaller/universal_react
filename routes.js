import AppComponent from './components/app.jsx';
import IndexComponent from './components/index.jsx';
import AboutComponent from './components/about.jsx';
import TestComponent from './components/test.jsx';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },
    {
      path: '/test',
      name: 'test',
      component: TestComponent
    }
  ]
};

export { routes };
