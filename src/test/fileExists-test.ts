import { fileExists } from "../fileApi/fileExists";

const exists = async (filepath: string) => {
  const result = await fileExists(filepath);
  console.log(`${filepath} is ${result ? `exists` : `not exists`}`);
};

exists("./package.json");
exists("./package");
