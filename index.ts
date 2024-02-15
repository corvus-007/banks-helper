import { banks } from './banks';
import { IBankLogoItem } from './IBankLogoItem';

const UNKNOWN_BANK_FILE_NAME = 'unknown.svg';

const findBank = (bankName: string): IBankLogoItem => {
  return banks.find(({ matchedBankNames, humanName }) => {
    return [...matchedBankNames, humanName].map(it => it.toLowerCase()).includes(bankName.toLowerCase());
  });
};

const getBankLogoFileName = (bankName: string) => {
  const bankLogoItem = findBank(bankName);

  return bankLogoItem?.fileName || UNKNOWN_BANK_FILE_NAME;
};

const getBankLogoName = (bankName: string): string => {
  const bankLogoItem = findBank(bankName);

  return bankLogoItem?.humanName || bankName;
};

export {
  getBankLogoFileName,
  getBankLogoName,
};
