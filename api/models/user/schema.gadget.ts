import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://test-version-control.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-pU-91XUn0HLp",
  fields: {
    email: { type: "email", validations: { required: true, email: true, unique: true }, storageKey: "ModelField--pflBAFcdGcD" },
    emailVerificationToken: { type: "string", storageKey: "ModelField-AvZAy6xesGu4" },
    emailVerificationTokenExpiration: { type: "dateTime", includeTime: true, storageKey: "ModelField-bnnMob--0m6s" },
    emailVerified: { type: "boolean", default: false, storageKey: "ModelField-11UG9tg_DqL9" },
    firstName: { type: "string", storageKey: "ModelField-mjoQWDpVqOZJ" },
    googleImageUrl: { type: "url", validations: { url: true }, storageKey: "ModelField-J8AjeN4SX_fE" },
    googleProfileId: { type: "string", storageKey: "ModelField-Zrn43ZsuaLYE" },
    lastName: { type: "string", storageKey: "ModelField-Ojos4lpAJ7sT" },
    lastSignedIn: { type: "dateTime", includeTime: true, storageKey: "ModelField-JWu8SXeSWP8k" },
    password: { type: "password", validations: { strongPassword: true }, storageKey: "ModelField-HyFoMtJvGJSs" },
    resetPasswordToken: { type: "string", storageKey: "ModelField-nv8G7he99nVl" },
    resetPasswordTokenExpiration: { type: "dateTime", includeTime: true, storageKey: "ModelField-MiwhUIBMsSEH" },
    roles: { type: "roleList", default: ["unauthenticated"], storageKey: "ModelField-IyCSBQF8ZI3H" },
  },
};
