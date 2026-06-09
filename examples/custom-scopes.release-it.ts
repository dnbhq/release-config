import { createReleaseConfig } from "@dnbhq/release-config";
import type { Config } from "release-it";

const config: Config = createReleaseConfig({
  scopes: {
    minorTypes: ["feat", "prompt", "instructions", "skill"],
    minorExclusionSubscopes: {
      feat: ["fix"],
      prompt: ["fix"],
      instructions: ["fix"],
      skill: ["fix"]
    }
  }
});

export default config;
