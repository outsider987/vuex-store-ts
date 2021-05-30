import { MutationTree } from "vuex";
import { RootState } from "../type";
import { InterRootComics, InterRootComic } from "./type";

export const mutations: MutationTree<InterRootComics> =
{
    SET_ROOT_COMICSDATA(state, payload: InterRootComic[]) {
        state.rootComicDatas = payload;
    }

}
