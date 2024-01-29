import { Client } from "@gadget-client/test-version-control";

export const api = new Client({ environment: window.gadgetConfig.environment });
