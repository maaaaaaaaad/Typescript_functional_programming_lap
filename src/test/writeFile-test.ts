import { mkdir } from "../fileApi/mkdir";
import { writeFile } from "../fileApi/writeFile";

const writeTest = async (fileName: string, data: any) => {
  const result = await writeFile(fileName, data);
  console.log(`result : ${result}`);
};

mkdir("./data")
  .then((e) => writeFile("./data/hello.txt", "Hello World"))
  .then((e) =>
    writeFile(
      "./data/test.json",
      JSON.stringify({ name: "Woong", age: 31 }, null, 2)
    )
  )
  .catch((error) => console.log(error));
