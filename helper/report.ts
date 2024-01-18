const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results", 
  reportPath: "./",
  reportName: "Playwright Report", 
  pageTitle: "Book Cart Test Report", 
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "120",
    },
    device: "Tripti’s MacBook Pro", 
    platform: {
      name: "ios",
      version: "14.0",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
    ],
  },
});