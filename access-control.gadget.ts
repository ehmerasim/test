import type { GadgetAccessControl } from "gadget-server";

/**
 * This metadata describes the access control configuration available in your application.
 * Grants that are not defined here are set to false by default.
 *
 * View and edit your roles and permissions in the Gadget editor at https://test-version-control.gadget.app/edit/settings/permissions
 */
export const accessControl: GadgetAccessControl = {
  type: "gadget/access-control/v1",
  roles: {
    "signed-in": {
      storageKey: "signed-in",
      default: {
        read: true,
        action: true,
      },
      models: {
        user: {
          read: {
            filter: "api/models/user/filters/tenant.gelly",
          },
          actions: {
            changePassword: {
              filter: "api/models/user/filters/tenant.gelly",
            },
            signOut: {
              filter: "api/models/user/filters/tenant.gelly",
            },
          },
        },
      },
    },
    unauthenticated: {
      storageKey: "unauthenticated",
      models: {
        user: {
          actions: {
            resetPassword: true,
            sendResetPassword: true,
            sendVerifyEmail: true,
            signIn: true,
            signUp: true,
            verifyEmail: true,
          },
        },
      },
    },
  },
};
