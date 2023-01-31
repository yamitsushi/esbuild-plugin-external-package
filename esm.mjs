import path from "path"
import fs from "fs"

/**
 * Set External Packages
 *
 *  @type {import("esbuild").Plugin}
 */
export default {
  name: "external-package",
  setup: async (build) => {
    const options = build.initialOptions
    const external = options.external ?? []

    const packages = JSON.parse(
      await fs.readFileSync(path.resolve(process.cwd(), "package.json"), {
        encoding: "utf-8",
      }),
    )
    if (packages?.dependencies) external.push(...Object.keys(packages.dependencies))
    if (packages?.devDependencies) external.push(...Object.keys(packages.devDependencies))

    options.external = external
  },
}
