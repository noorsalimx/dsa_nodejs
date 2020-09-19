const constants = {};

constants.NODE_ENV = process.env.NODE_ENV;
constants.PORT = process.env.PORT || 3000;

// Logging Levels
constants.LOGGER_LEVEL = {
  debug: "Debug",
  info: "Info",
  error: "Error",
  critical: "Critical",
  unhandled: "Unhandled",
};

module.exports = constants;
