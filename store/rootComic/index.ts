import { InterRootComics } from './type';
import Vue from 'vue';
import axios from 'axios';
import { Module, Commit, Dispatch } from 'vuex';
import { RootState } from '../type';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutation'


const state: InterRootComics = {
    "rootComicDatas": []
}
export const rootComic: Module<InterRootComics, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

// export default {
//     namespaced: true,
//     state: {
//         "rootComicsData": []
//     },
//     mutations: {
//         setRootComicDatas(state: any, arr: any) {
//             state.rootComicsData = arr;
//             console.log(state);
//             console.log(arr);
//         }

//     },
//     actions: {
//         getRootComics({ commit }: { commit: Commit }) {
//             console.log(process.env)
//             console.log(process.env.VUE_APP_SERVER)
//             axios.get(process.env.VUE_APP_SERVER + "getRootComics")
//                 .then((res: any) => {
//                     let dataArrary: InterRootComics = res.data;

//                     commit('setRootComicDatas', dataArrary)

//                     console.log(res)
//                 })
//                 .catch((err: any) => {
//                     console.error(err);
//                 })
//         }
//     },
//     modules: {

//     },
//     getters: {
//         // "rootComicsData": (state: any) => {
//         //     return state.rootComicsData;
//         // }
//         getComicDatas(state: any) {
//             return state;
//         }

//     }
// }

