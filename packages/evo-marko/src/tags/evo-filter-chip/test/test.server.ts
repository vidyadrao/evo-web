import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../filter-chip.stories"; // import all stories from the stories file
const { Default, Expressive, MenuButton } = composeStories(stories);

describe("evo-filter-chip", () => {
  it("renders static default", async () => {
    await snapshotHTML(Default);
  });

  it("renders expressive", async () => {
    await snapshotHTML(Expressive);
  });

  it("renders menu button", async () => {
    await snapshotHTML(MenuButton);
  });

  it("renders static selected", async () => {
    await snapshotHTML(Default, { selected: true });
  });

  it("renders expressive selected", async () => {
    await snapshotHTML(Expressive, { selected: true });
  });

  it("renders menu button selected", async () => {
    await snapshotHTML(MenuButton, { selected: true });
  });

  it("renders menu button expanded", async () => {
    await snapshotHTML(MenuButton, { expanded: true });
  });

  it("renders menu button expanded and selected", async () => {
    await snapshotHTML(MenuButton, { expanded: true, selected: true });
  });

  it("renders as link", async () => {
    await snapshotHTML(Default, { href: "www.ebay.com" });
  });

  it("renders as link selected", async () => {
    await snapshotHTML(Expressive, {
      href: "www.ebay.com",
      a11ySelectedText: "selected",
      selected: true,
    });
  });
});
