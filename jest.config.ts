export default {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/dist"],
  setupFilesAfterEnv: ["@dpdpdp/jest-preset"],
};
