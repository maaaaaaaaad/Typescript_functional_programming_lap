import * as path from "path";
import { writeFile } from "../fileApi/writeFile";
import { mkdir } from "../fileApi/mkdir";
import mkdirp = require("mkdirp");

const writeTest = async (fileName: string, data: any) => {
  const result = await writeFile(fileName, data);
  console.log(`write ${result} to ${fileName}`);
};

mkdir("./data") //
  .then((s) => writeTest("./data/hello.txt", "Hello World"))
  .then((s) =>
    writeTest("./data/test.json", JSON.stringify({ name: "Woong", age: 31 }))
  )
  .catch((error) => console.log(error.message));
