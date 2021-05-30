import { RootState } from './../type';
import { InterRootComics, InterRootComic } from './type';

import { GetterTree } from "vuex";


export const getters: GetterTree<InterRootComics, RootState> = {
    getRootcomicDatas(state): InterRootComic[] {
        return state.rootComicDatas;
    }
}
