import mysql from "serverless-mysql";

export const conn = mysql({
  config: {
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.MYDB,
  },
});
