import AppComponent from './components/app';
import IndexComponent from './components/index';
import AboutComponent from './components/about';
import TestComponent from './components/test';

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
