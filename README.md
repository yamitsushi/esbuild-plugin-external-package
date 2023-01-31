# esbuild-plugin-external-package

ESbuild plugin that sets all dependencies to external

## Installation

```bash
npm install esbuild-plugin-external-package --save-dev
pnpm install esbuild-plugin-external-package --save-dev
yarn add esbuild-plugin-external-package --save-dev
```

```javascript
import esbuild from "esbuild";
import externalPackage from "esbuild-plugin-external-package";

esbuild.build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  outfile: "./dist/index.js",
  plugins: [externalPackage],
});
```
