// __tests__/App.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App";
import { sum } from "../screens/HomeScreen";
describe("App", () => {
  it("render the home screen", () => {
    const { getByText } = render(<App />);
    expect(getByText("Home Screen")).toBeTruthy();
  });
});
