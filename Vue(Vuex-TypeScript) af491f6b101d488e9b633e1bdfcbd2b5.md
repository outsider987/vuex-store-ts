# Vue(Vuex-TypeScript)

![Vue(Vuex-TypeScript)%20af491f6b101d488e9b633e1bdfcbd2b5/Untitled.png](Vue(Vuex-TypeScript)%20af491f6b101d488e9b633e1bdfcbd2b5/Untitled.png)

在var來var去的同時雖然很方便,但也留下了許多技術債,在專案變大的同時未來是需要還的,但是在Vuex裡面使用TypeScript是非常痛苦的,因為VUEX本身的寫法是不支援TypeScript,這邊我示範一下如何重新定義store能夠好好低與typeScript結合吧

## Store結構:

type,是定義本身型別放置的地方

```
store
│   index.ts
│   type.ts
│
└───rootComic
        actions.ts
        getters.ts
        index.ts
        mutation.ts
        type.ts
```

## index.d.ts:

我們可以從index底層Store的code,看到有個模板可以轉換成你想要的物件,裡面的**<S>**就是你定義的型別

```
export interface StoreOptions<S> {
state?: S | (() => S);

getters?: GetterTree<S, S>;

actions?: ActionTree<S, S>;

mutations?: MutationTree<S>;

modules?: ModuleTree<S>;

plugins?: Plugin<S>[];

strict?: boolean;

devtools?: boolean;

}
```

# Store定義:

## Step1:

開一個type.ts的檔案宣告我們**<S>**的型別,State本是個放資料的地方,要放資料的地方一定少不了interface,我們就已interface的方式來定義我們的state吧

```
export interface RootState {
"rootmessage": string
}
```

## Step2:

原本的寫法

```
import { createStore } from 'vuex'
export default createStore({
state: {

},

mutations: {

},

actions: {

},

modules: {

}

});
```

變成模板的宣告方式,我們可以看到我們把type.ts裡面宣告好的物件模板引用進來,轉換進來後就可以使用了

```
import { RootState } from './type';
import Vuex, { createStore, StoreOptions } from 'vuex'
const store: StoreOptions<RootState> = {
state: {

"rootmessage": "test"

},

mutations: {

},

actions: {

},

modules: {

}

}

export default new Vuex.Store<RootState>(store);
```

我們快來看看我們在component裡面使用的樣子吧

![Vue(Vuex-TypeScript)%20af491f6b101d488e9b633e1bdfcbd2b5/Untitled%201.png](Vue(Vuex-TypeScript)%20af491f6b101d488e9b633e1bdfcbd2b5/Untitled%201.png)

我們剛剛定義的rootmessage可以看到他了,這就是TypeScript美麗的地方,可以很清楚看到自己寫的code資料是如何流動的,開心

# 子Module定義:

## Step1:

先定義好我們State裡面interface的資料吧

```
export interface InterRootComic {
"mainIndex": string,

"mainIndex_name": string,

"descr": string,

"link": string,

"title": string,

"thumbnail_name": string,

"thumbnail_url": string,
}

export interface InterRootComics {

"rootComicDatas": InterRootComic[]

}
```

## Step2:

翻了index.d.ts裡面有個Module的模板可以替換

```
export interface Module<S, R> {
namespaced?: boolean;

state?: S | (() => S);

getters?: GetterTree<S, R>;

actions?: ActionTree<S, R>;

mutations?: MutationTree<S>;

modules?: ModuleTree<R>;

}
```

實現模板的定義

```
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
```

## Step3:

回到root的index.ts,把我剛做好的moudle import 進去吧

```
const store: StoreOptions<RootState> = {
state: {
"rootmessage": "test"
},

mutations: {
},

actions: {
},

modules: {
rootComic,
}
}
export default new Vuex.Store<RootState>(store);
```

這樣我們就有自己定義好的module可以使用了

## Step4:

在子模組底下如何重新定義state,gettrts,actions,mutations的範例我就放在我[github](https://github.com/outsider987/vuex-store-ts)讓大家去看看吧

![Vue(Vuex-TypeScript)%20af491f6b101d488e9b633e1bdfcbd2b5/Untitled%202.png](Vue(Vuex-TypeScript)%20af491f6b101d488e9b633e1bdfcbd2b5/Untitled%202.png)

![Vue(Vuex-TypeScript)%20af491f6b101d488e9b633e1bdfcbd2b5/Untitled%203.png](Vue(Vuex-TypeScript)%20af491f6b101d488e9b633e1bdfcbd2b5/Untitled%203.png)