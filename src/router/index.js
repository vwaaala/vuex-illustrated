import {createRouter, createWebHashHistory} from "vue-router";
import Products from "../views/Products.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
    {path: '/', component: Products, name: 'Home'},
    {path: '/cart', component: Cart, name: 'Cart'},
    {path: '/login', component: Login, name: 'Login'},
    {
        path: '/details/:id',
        name: 'ProductDetails',
        component: ProductDetails,
    },
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
