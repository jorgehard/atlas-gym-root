/* eslint-disable prettier/prettier */
module.exports = {
  apps: [
    {
      name: "Root_Config",
      script: "C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js",
      args: "start",
    },
    {
      name: "Dashboard",
      cwd: "modules/atlas-gym-mfe-dashboard",
      script: "C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js",
      args: "start",
    },
  ],
};
