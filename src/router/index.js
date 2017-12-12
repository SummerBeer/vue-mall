import Vue from 'vue';
import Router from 'vue-router';

const App = () => import("../pages/App");
const Recommend = () => import("../pages/Recommend");
const Clothing = () => import("../pages/Clothing");
const Furniture = () => import("../pages/Furniture");
const Food = () => import("../pages/Food");

Vue.use(Router)

const routes = [
  {
    path: '/', 
    name: 'app', 
    component: App,
    children: [{
      path: 'recommend',
      name: 'recommend',
      component: Recommend
    },{
      path: 'clothing',
      name: 'clothing',
      component: Clothing
    },{
      path: 'furniture',
      name: 'furniture',
      component: Furniture
    },{
      path: 'food',
      name: 'food',
      component: Food
    }]
  }
]

export default new Router({
  routes,
  mode: "history",
  base: __dirname
})