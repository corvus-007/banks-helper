import { banks } from './banks';
import { IBankLogoItem } from './IBankLogoItem';

const UNKNOWN_BANK_FILE_NAME = 'unknown.svg';

const findBank = (bankName: string, banksList: IBankLogoItem[] = banks, isExact = true): IBankLogoItem => {
  if (!bankName) {
    return;
  }

  const lowerBankName = bankName.toLowerCase();

  return banksList.find(({ matchedBankNames, humanName }) => {
    const lowerBankNames = Array.from([...matchedBankNames, humanName], it => it.toLowerCase());

    return lowerBankNames.some(it => {
      if (isExact) {
        return it === lowerBankName;
      }

      return it.includes(lowerBankName);
    });
  });
};

const getBankLogoFileName = (bankName: string, banksList: IBankLogoItem[] = banks, isExact = true) => {
  const bankLogoItem = findBank(bankName, banksList, isExact);

  return bankLogoItem?.fileName || UNKNOWN_BANK_FILE_NAME;
};

const getBankLogoName = (bankName: string, banksList: IBankLogoItem[] = banks, isExact = true): string => {
  const bankLogoItem = findBank(bankName, banksList, isExact);

  return bankLogoItem?.humanName || bankName;
};

export {
  UNKNOWN_BANK_FILE_NAME,
  banks,
  findBank,
  getBankLogoFileName,
  getBankLogoName,
};
