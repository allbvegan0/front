import { render, screen } from "@testing-library/react";
import App from "../pages/index";
import React from 'react';
import { mount } from 'enzyme';

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("title", { name: "ållßvegan: ®™" })
    ).toBeInTheDocument();
  });
});

// test('Wållßvegan: ®™', () => {
//  const wrapper = mount(<title>ållßvegan: ®™</title>);
//  expect(wrapper.text()).toMatch('ållßvegan: ®™');
// });

