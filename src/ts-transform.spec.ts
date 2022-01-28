import { isNotAPrivateKey } from "./ts-transform";

describe("test w/ TS transform", () => {
  it("should pass", () => {
    expect(isNotAPrivateKey()).toBe(false);
  });
});
