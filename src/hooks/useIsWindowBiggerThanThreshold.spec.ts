import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useIsWindowBiggerThanThreshold } from "./useIsWindowBiggerThanThreshold";

describe("useIsWindowBiggerThanThreshold hook", () => {
	beforeAll(() => {
		Object.defineProperty(window, "innerWidth", {
			writable: true,
			configurable: true,
			value: 1080,
		});

		window.dispatchEvent(new Event("resize"));
	});

	it("should return true if the screen width is bigger than input threshold", () => {
		const { result } = renderHook(() => useIsWindowBiggerThanThreshold(450));

		expect(result.current).toBe(true);
	});

	it("should return false if the screen width is not bigger than input threshold", () => {
		const { result } = renderHook(() => useIsWindowBiggerThanThreshold(1440));

		expect(result.current).toBe(false);
	});

	it("should change return when the screen changes from bigger to smaller than threshold", () => {
		const hook = renderHook(() => useIsWindowBiggerThanThreshold(800));

		expect(hook.result.current).toBe(true);

		act(() => {
			Object.defineProperty(window, "innerWidth", {
				writable: true,
				configurable: true,
				value: 375,
			});

			window.dispatchEvent(new Event("resize"));
		});

		expect(hook.result.current).toBe(false);
	});

	it("should change return when the screen changes from smaller to bigger than threshold", () => {
		const hook = renderHook(() => useIsWindowBiggerThanThreshold(1200));

		expect(hook.result.current).toBe(false);

		act(() => {
			Object.defineProperty(window, "innerWidth", {
				writable: true,
				configurable: true,
				value: 1440,
			});

			window.dispatchEvent(new Event("resize"));
		});

		expect(hook.result.current).toBe(true);
	});
});
