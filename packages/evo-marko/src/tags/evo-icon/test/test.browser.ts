import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import icons from "../examples/icons.marko";

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

function checkIfHidden() {
  const svg = document.body.firstChild as SVGElement;

  expect(svg.style.position).to.equal(
    "absolute",
    "position should be absolute",
  );
  expect(svg.style.height).to.equal("0px", "height should be 0px");
  expect(svg.style.width).to.equal("0px", "width should be 0px");
}

function checkIcon(iconId: string) {
  const svg = document.body.firstChild as SVGElement;
  expect(svg.tagName).to.equal("svg");

  let iconAdd: SVGSymbolElement | null = null;
  svg.childNodes.forEach((child) => {
    expect((child as SVGSymbolElement).tagName).to.match(/symbol|defs/);
    if ((child as SVGSymbolElement).id === iconId) {
      if (!!iconAdd) {
        throw new Error(`Found multiple ${iconId}, expect only 1.`);
      } else {
        iconAdd = child as SVGSymbolElement;
      }
    }
  });
  if (!iconAdd) {
    throw new Error(`${iconId} is not being added into SVG symbols`);
  }
}

describe("rendering multiple icons in the browser", () => {
  beforeEach(async () => {
    await render(icons);
  });

  it("should create root SVG", () => {
    checkIfHidden();
    const svg = document.body.firstChild as SVGElement;
    expect(svg.tagName).to.equal("svg");

    expect(() => checkIcon("icon-add-24")).to.not.throw(Error);
    expect(() => checkIcon("icon-play-24")).to.not.throw(Error);
    expect(() => checkIcon("icon-pause-24")).to.not.throw(Error);
    // Should have at least 3 icon symbols
    expect(svg.childNodes.length).to.be.greaterThan(3);
  });
});
