import { mkdir } from "../fileApi/mkdir";

const makeDataDir = async (dirName: string) => {
  let result = await mkdir(dirName);
  console.log(result);
};

makeDataDir("./data/users");
