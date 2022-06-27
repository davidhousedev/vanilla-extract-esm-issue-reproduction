# Reproduction of ES Modules type definition issues

When generating type definitions for Vanilla Extract's Sprinkles package using `moduleResolution: "node"`, we are able to generate type definitions that include all available CSS implemented by Sprinkles.

When generating using `moduleResolution: "node16"`, the `dist/sprinkles.css.d.ts` does not include granular type information for sprinkles.

This issue blocks our adoption of ES Modules in a consumer of a component library backed by Vanilla Extract and Sprinkles.

## To reproduce issue

```
sed -i '' 's/node"/node16"/g' tsconfig.json
yarn
yarn build
cat ./dist/sprinkles.css.d.ts
```

## To reproduce expected result

```
sed -i '' 's/node16"/node"/g' tsconfig.json
yarn
yarn build
cat ./dist/sprinkles.css.d.ts
```
