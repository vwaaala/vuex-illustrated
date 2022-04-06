import Vuex from 'vuex'
import account from './account'
import product from './product'
export const store = new Vuex.Store({
        modules: {
            account,
            product
        },
    })