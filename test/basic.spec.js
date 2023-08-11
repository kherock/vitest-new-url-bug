import { expect, test, vi } from "vitest";
import { inFunction, readme, nmReadme } from "./basic";

vi.mock("uuid", () => ({ v4: vi.fn().mockImplementation(() => "uuid-v4") }));

test("mock use in function", () => {
  inFunction();
});

test("should resolve an asset with http", () => {
  console.log(readme.href);
  expect(readme.origin).toEqual(location.origin);
});

test("should resolve an node_modules asset with http", () => {
  console.log(nmReadme.href);
  expect(nmReadme.origin).toEqual(location.origin);
});
