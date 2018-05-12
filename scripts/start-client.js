const args = ["start"];
const opts = { stdio: "inherit", cwd: "material-dashboard-react-html-v1.2.0", shell: true };
require("child_process").spawn("npm", args, opts);
