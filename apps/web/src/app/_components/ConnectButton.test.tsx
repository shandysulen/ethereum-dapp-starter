import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ConnectButton } from "./ConnectButton";

const capture = jest.fn();
jest.mock("posthog-js/react", () => ({
  usePostHog: () => ({
    capture,
  }),
}));

const openConnectModal = jest.fn();
jest.mock("@rainbow-me/rainbowkit", () => ({
  useConnectModal: () => ({
    openConnectModal,
  }),
}));

describe("ConnectButton", () => {
  beforeEach(() => {
    // ARRANGE
    render(<ConnectButton />);

    // ACT
    fireEvent.click(screen.getByText("Connect"));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("calls RainbowKit's `openConnectModal()`", () => {
    // ASSERT
    expect(openConnectModal).toHaveBeenCalledTimes(1);
  });

  test("calls PostHog's `capture()`", () => {
    // ASSERT
    expect(capture).toHaveBeenCalledTimes(1);
    console.log(openConnectModal.mock.calls);
  });
});
