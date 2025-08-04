import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup, fireEvent } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { fastAnimations } from "../../../common/test-utils/index";
import * as stories from "../details.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let clickSpy = vi.fn();
let toggleSpy = vi.fn();

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);

describe("evo-details", () => {
  describe("given the details is in the default state", () => {
    beforeEach(async () => {
      component = await render(Default, {
        onClick: clickSpy,
        onToggle: toggleSpy,
      });
    });
    afterEach(() => {
      clickSpy.mockReset();
      toggleSpy.mockReset();
    });

    it("should render with open false", () => {
      expect(component.getByText("Details").closest("details")?.open).to.equal(
        false,
      );
    });

    describe("click on details", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByText("Details"));
      });

      it("then it emits the toggle and click", async () => {
        expect(toggleSpy).toBeCalledTimes(1);
        expect(clickSpy).toBeCalledTimes(1);
        expect(
          component.getByText("Details").closest("details")?.open,
        ).to.equal(true);
      });
    });
  });

  describe("given the details is in the open state", () => {
    beforeEach(async () => {
      component = await render(Default, {
        open: true,
        onClick: clickSpy,
        onToggle: toggleSpy,
      });
    });
    afterEach(() => {
      clickSpy.mockReset();
      toggleSpy.mockReset();
    });

    it("should render with open false", () => {
      expect(component.getByText("Details").closest("details")?.open).to.equal(
        true,
      );
    });

    describe("click on details", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByText("Details"));
      });

      it("then it emits the toggle and click", async () => {
        expect(toggleSpy).toBeCalledTimes(1);
        expect(clickSpy).toBeCalledTimes(1);
        expect(
          component.getByText("Details").closest("details")?.open,
        ).to.equal(false);
      });
    });
  });
});
