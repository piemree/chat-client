export default {
  async createNewRoom(ctx, roomName) {
    
    const user = ctx.rootState.auth.user
 const roomInfo = { name: roomName,users:[user]};
    try {
      const room = await this.$axios.post("/rooms", roomInfo);
      console.log(room);
    } catch (error) {
      console.log(error);
    } 
  }
};
