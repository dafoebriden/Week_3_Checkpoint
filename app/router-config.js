import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [],
    view:``

  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])