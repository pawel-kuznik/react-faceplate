export default {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testMatch: ["**/?(*.)test.(ts|tsx)"],
    moduleNameMapper: {

        // The global stub for weird files
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/mocks/fileMock.js",

        // The mock for style related files
        "\\.(css|less|sass|scss)$": "identity-obj-proxy", 
    },
};  