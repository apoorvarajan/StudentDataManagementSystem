const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  //collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', 'src/**/*.test.{js,jsx,ts,tsx}'],
  collectCoverageFrom: ['client/src/components/Home.tsx','client/src/components/LoginModal.tsx','client/src/components/sideBar.tsx',
  'client/src/components/dashboardComponents/AcademicMain.tsx', 'client/src/components/dashboardComponents/dashboardSummary.tsx',
  'client/src/components/dashboardComponents/ManageClasses.tsx', 'client/src/components/dashboardComponents/AcademicContents/graduation.tsx',
  'client/src/components/dashboardComponents/AcademicContents/transcriptRequest.tsx', 
  'client/src/components/dashboardComponents/CpaContents/browseCourses.tsx', 'client/src/components/dashboardComponents/CpaContents/checkReq.tsx',
  'client/src/components/dashboardComponents/CpaContents/currentCourses.tsx','!client/src/components/dashboardComponents/dashboardSummary.tsx'
],

  reporters: ['default', 'jest-html-reporters'],
  setupFilesAfterEnv: [path.resolve(__dirname, 'setupTests.js')],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    'google-protobuf': 'google-protobuf',
    'grpc-web': '<rootDir>/grpcMock.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!grpc-web)/', // ignore everything in node_modules except grpc-web
  ],
};
