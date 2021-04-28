import axios from 'axios'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  level: string,
  question: Array<object>
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    level: "第一题",
    question: []
  },
  mutations: {
    initData(state, payload) {
      state.question = payload.data
      console.log(state.question);
      
    }
  },
  actions: {
    async getData(context) {
      let res = await axios.get("/data/question.json");
      context.commit("initData", res)
    }
  }
})