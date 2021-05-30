import axios from "axios";
import { ActionTree, Commit } from "vuex";
import { RootState } from "../type";
import { InterRootComics } from "./type";


export const actions: ActionTree<InterRootComics, RootState> =
{
    getRootComics({ commit }: { commit: Commit }) {
        console.log(process.env)
        console.log(process.env.VUE_APP_SERVER)
        axios.get(process.env.VUE_APP_SERVER + "getRootComics")
            .then((res: any) => {
                let dataArrary: InterRootComics = res.data;

                commit('SET_ROOT_COMICSDATA', dataArrary)

                console.log(res)
            })
            .catch((err: any) => {
                console.error(err);
            })
    }
}
