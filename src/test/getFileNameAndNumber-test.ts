import { getFileNameAndNumber } from "../utils/getFileNameAndNumber";

const [filename, numberOfFakeItems] = getFileNameAndNumber(
  "data/fake.csv",
  10000
);

console.log(filename, numberOfFakeItems);
