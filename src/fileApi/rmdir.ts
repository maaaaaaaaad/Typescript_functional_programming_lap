import rimraf from "rimraf";
import { fileExists } from "./fileExists";

export const rmdir = (dirname: string): Promise<string> => {
  const _rmdir = async (resolve, reject) => {
    const alreadyExists: boolean = await fileExists(dirname);
    !alreadyExists
      ? resolve(dirname)
      : rimraf(dirname, (error) => (error ? reject(error) : resolve(dirname)));
  };
  return new Promise(_rmdir);
};
