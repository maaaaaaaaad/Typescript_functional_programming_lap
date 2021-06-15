import * as fs from "fs";

export const writeFile = (fileName: string, data: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, "utf8", (error) =>
      error ? reject(error) : resolve(data)
    );
  });
};
