const { app, PORT } = require("./src/config/config.js");
require("./src/modules/user/user.module.js");

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
