export type FileNameAndNumber = [string, number];

export const getFileNameAndNumber = (
  defaultFileName: string,
  defaultNumberOffFakeData: number
): FileNameAndNumber => {
  const [bin, node, filename, numberOffFakeData]: string[] = process.argv;
  return [
    filename || defaultFileName,
    numberOffFakeData
      ? parseInt(numberOffFakeData, 10)
      : defaultNumberOffFakeData,
  ];
};
