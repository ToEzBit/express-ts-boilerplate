import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^(\\.\\.?\\/.+)\\.js$": "$1",
  },
};

export default config;
