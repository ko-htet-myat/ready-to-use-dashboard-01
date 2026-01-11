import { setupWorker } from "msw/browser";
import { authHandlers } from "./handlers/auth.handler";
import { userHandlers } from "./handlers/user.handler";

export const worker = setupWorker(...authHandlers, ...userHandlers);
