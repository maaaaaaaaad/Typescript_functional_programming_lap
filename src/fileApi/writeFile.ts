import * as fs from "fs";

export const writeFile = (fileName: string, data: any): Promise<any> => {
  const _writeFile = async (resolve, reject) => {
    fs.writeFile(fileName, data, "utf8", (error) =>
      error ? reject(error) : resolve(data)
    );
  };
  return new Promise(_writeFile);
};
