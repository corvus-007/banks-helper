import { banks } from './banks';
import { IBankLogoItem } from './IBankLogoItem';

const UNKNOWN_BANK_FILE_NAME = 'unknown.svg';

const findBank = (bankName: string, banksList: IBankLogoItem[] = banks): IBankLogoItem => {
  if (!bankName) {
    return;
  }

  const lowerBankName = bankName.toLowerCase();

  return banksList.find(({ matchedBankNames, humanName }) => {
    return Array.from([...matchedBankNames, humanName], it => it.toLowerCase())
                .some(it => it.includes(lowerBankName));
  });
};

const getBankLogoFileName = (bankName: string, banksList: IBankLogoItem[] = banks) => {
  const bankLogoItem = findBank(bankName, banksList);

  return bankLogoItem?.fileName || UNKNOWN_BANK_FILE_NAME;
};

const getBankLogoName = (bankName: string, banksList: IBankLogoItem[] = banks): string => {
  const bankLogoItem = findBank(bankName, banksList);

  return bankLogoItem?.humanName || bankName;
};

export {
  UNKNOWN_BANK_FILE_NAME,
  getBankLogoFileName,
  getBankLogoName,
};
