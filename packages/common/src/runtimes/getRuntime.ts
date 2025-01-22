import { NodeRuntime } from "./NodeRuntime";
import type { Runtime } from "./Runtime";

export const runtime: Runtime = new NodeRuntime();

export type { Runtime };
