import { createReleaseConfig } from "@dnbhq/release-config";
import type { Config } from "release-it";

const config: Config = createReleaseConfig({
  changelogFile: "CHANGELOG.md",
  githubTokenRef: "GITHUB_TOKEN_CONTENT_PRIVATE",
  overrides: {
    git: {
      requireCleanWorkingDir: true,
      commitMessage: "chore(release): v${version}",
      tagName: "v${version}"
    },
    github: {
      release: true,
      skipChecks: true
    }
  }
});

export default config;
