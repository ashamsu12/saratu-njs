import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import excuteQuery from "./db";
import { IPortfolio } from "./interfaces";

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

const users = [];

export async function createUser(payload: {
  email: string;
  password: string;
  fullname: string;
}) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString("hex");
  const password = crypto
    .pbkdf2Sync(payload.password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    ...payload,
    password: password,
    salt,
  };

  try {
    const result = await excuteQuery({
      query:
        "INSERT INTO users ( email, password, fullname, salt) VALUES(?, ?, ?, ?)",
      values: [user.email, user.password, user.fullname, user.salt],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return user;
}

// Here you should lookup for the user in your DB
export async function findUser({ email }: { email: string }) {
  try {
    const result = await excuteQuery({
      query: "SELECT * FROM users WHERE email = ?",
      values: [email],
    });
    return result[0];
  } catch (error) {
    console.log(error);
  }
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export async function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordsMatch = user.password === inputHash;
  return passwordsMatch;
}

export async function getPortfolioContent():Promise<IPortfolio[]> {
  try {
    const result = await excuteQuery({
      query: "SELECT * FROM portfolio",
      values: [],
    });
    return result as IPortfolio[];
  } catch (error) {
    console.log(error);
  }
}

export async function createItem(item:IPortfolio,userId:number) {
  try {
    const result = await excuteQuery({
      query: "INSERT INTO portfolio ( name, description, type, link,image_url, creator_id) VALUES(?, ?, ?, ?, ?, ?)",
      values: [item.name,item.description,item.type,item.link,item.image_url,userId],
    });
    console.log(result)
    return item;
  } catch (error) {
    console.log(error);
  }
}
