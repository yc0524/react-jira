/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-22 13:37:16
 * @LastEditTime: 2021-04-22 13:43:10
 */
module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({ msg: "用户名或者密码错误" });
    }
  }
  next();
};
