import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup, fireEvent } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../checkbox.stories"; // import all stories from the stories file
import { snapshotHTML } from "../../../common/test-utils/snapshots";
const { Group, Disabled, Isolated } = composeStories(stories);

describe("evo-checkbox", () => {
  it("renders default checkbox", async () => {
    await snapshotHTML(Isolated);
  });

  it("renders disabled checkbox", async () => {
    await snapshotHTML(Disabled);
  });

  it("renders checkbox with id", async () => {
    await snapshotHTML(Group);
  });
});
