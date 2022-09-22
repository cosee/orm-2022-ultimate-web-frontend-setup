/* eslint-disable */
/**
 * Example
 * 0.0.1
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
  baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type PasswordEncryptionRequest = {
  password: string;
};
export type EncryptedPasswordResponse = {
  encryptedPassword: string;
  adminPasswordConfigKey: string;
};
export function encryptPassword(
  passwordEncryptionRequest?: PasswordEncryptionRequest,
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.fetchJson<{
    status: 200;
    data: EncryptedPasswordResponse;
  }>(
    "/api/encryptPassword",
    oazapfts.json({
      ...opts,
      method: "POST",
      body: passwordEncryptionRequest,
    })
  );
}
