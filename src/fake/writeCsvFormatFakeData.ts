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
