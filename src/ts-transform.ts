import { isPrivate } from "tiny-secp256k1";

export const isNotAPrivateKey = () => {
  return isPrivate(Buffer.from("notakey"));
};
