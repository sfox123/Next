const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const cors = require("cors");
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(cookieParser());

  server.get("/admin.console", (req, res) => {
    try {
      const adminId = req.cookies.token;
      app.render(req, res, "/admin", { id: adminId });
    } catch (error) {
      res.redirect("/illegalEntry");
    }
  });
  server.get("/admin", (req, res) => {
    try {
      const adminId = req.cookies.token;
      app.render(req, res, "/admin", { id: adminId });
    } catch (error) {
      res.redirect("/illegalEntry");
    }
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000 || process.env.PORT, (err) => {
    if (err) throw err;
    console.log("> Now serving on localhost:3000");
  });
});
