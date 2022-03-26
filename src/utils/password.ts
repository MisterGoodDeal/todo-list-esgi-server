const bcrypt = require("bcrypt");

const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
  //return match;
};

export const password = {
  hash: hashPassword,
  verify: verifyPassword,
};
