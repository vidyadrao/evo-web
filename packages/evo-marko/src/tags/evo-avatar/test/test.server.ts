import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../avatar.stories"; // import all stories from the stories file
const { Default, WithImage, SignedOut } = composeStories(stories);

describe("avatar", () => {
  it("renders defaults", async () => {
    await snapshotHTML(Default);
  });

  it("renders with image", async () => {
    await snapshotHTML(WithImage);
  });

  it("renders signed out", async () => {
    await snapshotHTML(SignedOut);
  });

  it("renders 128 px with magenta", async () => {
    await snapshotHTML(Default, { size: "128", color: "magenta" });
  });

  it("renders with test as usernames", async () => {
    await snapshotHTML(Default, { username: "test" });
  });
  it("renders with robert as username", async () => {
    await snapshotHTML(Default, { username: "robert" });
  });

  it("renders with doggy as username", async () => {
    await snapshotHTML(Default, { username: "doggy" });
  });
});
