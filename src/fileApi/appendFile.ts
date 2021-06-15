import * as fs from "fs";

export const appendFile = (fileName: string, data: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, data, "utf8", (error) => {
      error ? reject(error) : resolve(data);
    });
  });
};
