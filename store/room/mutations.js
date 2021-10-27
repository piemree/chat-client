export default{
    addRoom(state, room) {
      state.rooms.push(room);
    },
    deleteRoom(state, roomId) {
      const rooms = state.rooms;
      const idx = rooms.findIndex(room => room.id === roomId);
      rooms.splice(idx, 1);
    },
   
  };