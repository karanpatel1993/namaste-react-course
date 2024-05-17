import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(14);
  expect(
    screen.getByText("Your cart is empty. Add items to your cart!")
  ).toBeInTheDocument();
});
