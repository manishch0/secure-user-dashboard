module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testMatch: ['<rootDir>/src/**/*.test.js', '<rootDir>/src/**/*.test.tsx'],
  };
  