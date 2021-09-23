import antiShake from './antiShake/demo';
import updateHook from './useUpdateHook/demo';

const routes = [
  {
    path: '/',
    component: antiShake,
    name: "antiShake"
  },
  {
    path: '/updateHook',
    component: updateHook,
    name: "updateHook"
  }
];

export {
  routes
};
