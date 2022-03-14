// db.js
import mysql from 'serverless-mysql';
const config= {
  host: process.env.host,
  database: process.env.database,
  user: process.env.dbusername,
  password: process.env.password
}
const db = mysql({
  config:{...config,ssl:{rejectUnauthorized:true}}
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}