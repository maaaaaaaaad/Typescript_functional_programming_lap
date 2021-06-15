## Make a mkdir function

src/fileApi

```javascript
import mkdirp from "mkdirp";
import { fileExists } from "./fileExists";

export const mkdir = (dirName: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const alreadyExists: boolean = await fileExists(dirName);
    alreadyExists ? resolve(dirName) : mkdirp(dirName).then().catch(reject);
  });
};
```

src/test

```javascript
import { mkdir } from "../fileApi/mkdir";

const makeDataDir = async (dirName: string) => {
  let result = await mkdir(dirName);
  console.log(result);
};

makeDataDir("./data/users");
```

## Make a rmdir function

src/fileApi/rmdir.ts

```javascript
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
```

src/test/rmdir-test.ts

```javascript
import { rmdir } from "../fileApi/rmdir";

const deleteDir = async (dir: string) => {
  const result = await rmdir(dir);
  console.log(`result delete dir : ${result}`);
};

deleteDir("./data"); // remove data file
```

## Make a fake data

src/fake/IFake.ts

```javascript
export interface IFake {
  name: string;
  email: string;
  sentence: string;
  profession: string;
  birthday: Date;
}
```

src/fake/makeFakeData.ts

```javascript
import { IFake } from "./IFake";
import Chance from "chance";

const c = new Chance();

export const makeFakeData = (): IFake => ({
  name: c.name(),
  email: c.email(),
  sentence: c.sentence(),
  profession: c.profession(),
  birthday: c.birthday(),
});

export { IFake };
```

src/test/keys-values-test.ts

```javascript
import { IFake, makeFakeData } from "../fake/makeFakeData";

const data: IFake = makeFakeData();
const keys = Object.keys(data);
const values = Object.values(data);

console.log(`keys: ${keys}, values: ${values}`);
```

## Make a scv file writer

src/fae/writeCsvFormatFakeData.ts

```javascript
import * as path from "path";
import { range } from "../utils/range";
import { mkdir } from "../fileApi/mkdir";
import { IFake } from "./IFake";
import { makeFakeData } from "./makeFakeData";
import { writeFile } from "../fileApi/writeFile";
import { appendFile } from "../fileApi/appendFile";

export const writeCsvFormatFakeData = async (
  fileName: string,
  numberOfItems: number
): Promise<string> => {
  const dirName: string = path.dirname(fileName);
  await mkdir(dirName);

  const comma: string = ",",
    newline: string = "\n";

  for (let n of range(numberOfItems)) {
    const fake: IFake = makeFakeData();

    if (n == 0) {
      const keys = Object.keys(fake).join(comma);
      await writeFile(fileName, keys);
    }

    const values = Object.keys(fake).join(comma);
    await appendFile(fileName, newline + values);
  }
  return `write ${numberOfItems} items to ${fileName} file`;
};
```

**excute**
src/writeCsv.ts

```javascript
import { writeCsvFormatFakeData } from "./fake";
import { getFileNameAndNumber } from "./utils/getFileNameAndNumber";

const [fileName, numberOfItems] = getFileNameAndNumber("./data/fake", 1);
const csvFileName = `${fileName} - ${numberOfItems}.csv`;

writeCsvFormatFakeData(csvFileName, numberOfItems) //
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
```
