import State from "./state";

class InputState implements State {
  private static instance: InputState;

  constructor() {
    if (InputState.instance) {
      return InputState.instance;
    }
    InputState.instance = this;
  }

  static getInstance(): InputState {
    if (!InputState.instance) {
      InputState.instance = new InputState();
    }
    return InputState.instance;
  }
}

export default InputState;