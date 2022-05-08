const store = {
  state: {
    rover: "",
    max_sol: 0,
  },

  setRover(rover: string) {
    return (this.state.rover = rover);
  },

  setMaxSol(value: number) {
    return (this.state.max_sol = value);
  },
};

export default store;
