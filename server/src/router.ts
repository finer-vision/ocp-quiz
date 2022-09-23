import * as trpc from "@trpc/server";
import { type AppContext } from "./services/app";
import getRandomCode from "./actions/get-random-code";

const router = trpc.router<AppContext>().merge(getRandomCode);

export type Router = typeof router;

export default router;
