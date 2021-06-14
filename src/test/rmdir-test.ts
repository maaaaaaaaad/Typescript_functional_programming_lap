import { rmdir } from "../fileApi/rmdir";

const deleteDir = async (dir: string) => {
  const result = await rmdir(dir);
  console.log(`result delete dir : ${result}`);
};

deleteDir("./data");
