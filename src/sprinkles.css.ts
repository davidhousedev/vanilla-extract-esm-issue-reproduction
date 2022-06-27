import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
};

const colors = {
  blue50: "#eff6ff",
  blue100: "#dbeafe",
  blue200: "#bfdbfe",
  // etc.
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "block", "flex"],
    flexDirection: ["row", "column"],
    padding: space,
    // etc.
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      "@media": "(prefers-color-scheme: light)",
    },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: false,
  properties: {
    color: colors,
    background: colors,
  },
  // etc.
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
