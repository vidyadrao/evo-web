import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../selection-chip.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

describe("evo-selection-chip", () => {
  it("renders static default", async () => {
    await snapshotHTML(Default);
  });
  it("renders selected", async () => {
    await snapshotHTML(Default, { selected: true });
  });
});
