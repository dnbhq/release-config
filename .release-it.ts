import { createReleaseConfig } from "@dnbhq/release-config";
import type { Config } from "release-it";

const config: Config = createReleaseConfig({
  scopes: {
    patchTypes: ["fix", "docs", "ci", "chore"]
  }
});

export default config;
