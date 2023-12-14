const path = require('path');

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.test.{js,jsx,ts,tsx}'],
    reporters: ['default', 'jest-html-reporters'],
    setupFiles: [path.resolve(__dirname, 'setupTests.js')],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest',
    },
    
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
