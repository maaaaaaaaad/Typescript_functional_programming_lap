import { writeCsvFormatFakeData } from "./fake";
import { getFileNameAndNumber } from "./utils/getFileNameAndNumber";

const [fileName, numberOfItems] = getFileNameAndNumber("./data/fake", 1);
const csvFileName = `${fileName} - ${numberOfItems}.csv`;

writeCsvFormatFakeData(csvFileName, numberOfItems) //
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
