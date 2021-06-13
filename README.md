# Make a mkdir function

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
