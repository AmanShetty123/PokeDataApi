// jest-setup.js
import "react-native-gesture-handler/jestSetup";

// Mock the native modules and components for React Native Gesture Handler
jest.mock("react-native-gesture-handler", () => {
  const View = require("react-native").View;
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    GestureHandlerRootView: View,
    Directions: {},
    ...jest.requireActual("react-native-gesture-handler"),
  };
});
