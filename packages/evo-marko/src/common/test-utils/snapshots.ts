import { render, normalize } from "@marko/testing-library";
import { expect } from "vitest";

async function snapshotHTML(template: any, input?: any) {
  const { container } = await render(template, input);
  expect(normalize(container)).toMatchSnapshot();
}

export { snapshotHTML };
