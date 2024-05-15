import { Component, useContext, createContext } from "react";

const ThemeContext = createContext();

export class ThemeProvider extends Component {
  state = {
    theme: "dark",
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={{ theme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export function ThemeConsumer({ children }) {
  return (
    <ThemeContext.Consumer>
      {(context) => children(context)}
    </ThemeContext.Consumer>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
