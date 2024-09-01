import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { usePopups } from "../src/hooks/usePopups";

// Mocking the zustand hook
jest.mock("./hooks/usePopups", () => ({
  usePopups: jest.fn(),
}));

describe("App Component", () => {
  let addPopupMock: jest.Mock;
  let closePopupMock: jest.Mock;

  beforeEach(() => {
    // Reset all mocks
    addPopupMock = jest.fn();
    closePopupMock = jest.fn();

    // Mock of usePopups
    (usePopups as unknown as jest.Mock).mockReturnValue({
      popups: [],
      addPopup: addPopupMock,
      closePopup: closePopupMock,
      closeAll: jest.fn(),
      updatePopupPosition: jest.fn(),
    });
  });

  it('should add a popup when "Agregar Popup Tipo A" button is clicked', () => {
    render(<App />);

    // Find and click the button to add a popup
    const addButtonA = screen.getByText("Agregar Popup Tipo A");
    fireEvent.click(addButtonA);

    // Verify that addPopup was called with the args
    expect(addPopupMock).toHaveBeenCalledTimes(1);
    expect(addPopupMock).toHaveBeenCalledWith(
      expect.objectContaining({
        id: "1",
        title: "Popup: 1 - Tipo: A",
        type: "A",
        defaultPosition: {
          left: 20,
          top: 30,
          width: 200,
          height: 350,
        },
      })
    );
  });

  it('should add a popup when "Agregar Popup Tipo B" button is clicked', () => {
    render(<App />);

    // Find and click the button to add a popup
    const addButtonB = screen.getByText("Agregar Popup Tipo B");
    fireEvent.click(addButtonB);

    // Verify that addPopup was called with the args
    expect(addPopupMock).toHaveBeenCalledTimes(1);
    expect(addPopupMock).toHaveBeenCalledWith(
      expect.objectContaining({
        id: "1",
        title: "Popup: 1 - Tipo: B",
        type: "B",
        defaultPosition: {
          left: 250,
          top: 30,
          width: 300,
          height: 300,
        },
      })
    );
  });

  it("should close a popup when the close button is clicked", () => {
    // Add a popup to popups to simulate the action
    (usePopups as unknown as jest.Mock).mockReturnValue({
      popups: [
        {
          id: "1",
          title: "Popup: 1 - Tipo: A",
          content: "Popup content",
          defaultPosition: {
            left: 20,
            top: 30,
            width: 200,
            height: 350,
          },
          type: "A",
        },
      ],
      addPopup: addPopupMock,
      closePopup: closePopupMock,
      closeAll: jest.fn(),
      updatePopupPosition: jest.fn(),
    });

    render(<App />);

    // Verify the popup in the screen
    expect(screen.getByText("Popup: 1 - Tipo: A")).toBeInTheDocument();

    // Find and click the close button
    const closeButton = screen.getByTestId("close");
    fireEvent.click(closeButton);

    // Verify that closePopup was called with the correct ID
    expect(closePopupMock).toHaveBeenCalledTimes(1);
    expect(closePopupMock).toHaveBeenCalledWith("1");
  });
});
