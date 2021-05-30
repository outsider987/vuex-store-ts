import { rootComic } from './rootComic/index';
import { RootState } from './type';
import axios from 'axios';
import Vuex, { createStore, StoreOptions } from 'vuex'



const store: StoreOptions<RootState> = {

    state: {
        "rootmessage": "test"
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        "rootComic": rootComic
    }

}
export default new Vuex.Store<RootState>(store);

// export default createStore({
//     state: {

//     },
//     mutations: {

//     },
//     actions: {

//     },
//     modules: {
//         'rootComics': rootComicsModule
//     }
// });
