const appmodule = require("./module");

const main = async () => {
  await appmodule.add();
  await appmodule.mult();
  appmodule.rl.close();
};

main();
