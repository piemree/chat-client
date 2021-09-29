export const state = () => ({
  messages: [],
  id: null
});

export const mutations = {
  addMessage(state, payload) {
      let isMe=false
      if(payload.id==state.id) isMe=true
      let newPaylaod={...payload,isMe}
    state.messages.push(newPaylaod);
  },
  setOwnId(state, id) {
    state.id = id;
  }
};
