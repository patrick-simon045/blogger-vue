import { createStore } from "vuex";

export default createStore({
  state: {
    componentList: [],
  },
  getters: {
    GET_COMPONENT_LIST: (state) => {
      return state.componentList;
    },
  },
  mutations: {
    ADD_COMPONENT(state, payload) {
      var payloadComponent;

      if (payload.type.toLowerCase() == "title") {
        payloadComponent = `
        <h1 
          style="
            font-size: 30px; 
            font-weight: 200;
            text-align: center;
            "
          >
          ${payload.text}
        </h1>`;
        state.componentList.push(payloadComponent);
        return;
      }

      if (payload.type.toLowerCase() == "paragraph") {
        payloadComponent = `
        <p
          style="
            font-size: 15px;
            margin: 20px 0;
            "
          >
            ${payload.text}
        </p>`;
        state.componentList.push(payloadComponent);
        return;
      }
    },

    REMOVE_COMPONENT(state, payload) {
      if(payload.index > -1) {
        state.componentList.splice(payload.index, 1)
      }
    }
  },
  actions: {},
  modules: {},
});
