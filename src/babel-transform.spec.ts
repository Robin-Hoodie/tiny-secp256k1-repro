import { isNotAPrivateKey } from "./babel-transform";

describe("test w/ Babel transform", () => {
  it("should pass", () => {
    expect(isNotAPrivateKey()).toBe(false);
  });
});
