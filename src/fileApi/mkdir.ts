import mkdirp from "mkdirp";
import { fileExists } from "./fileExists";

export const mkdir = (dirName: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const alreadyExists: boolean = await fileExists(dirName);
    alreadyExists ? resolve(dirName) : mkdirp(dirName).then().catch(reject);
  });
};
