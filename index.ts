import { banks } from './banks';

const UNKNOWN_BANK_FILE_NAME = 'unknown.svg';

export const getBankLogoFileName = (bankName: string) => {
    const bankLogoItem = banks.find(({ matchedBankNames, humanName }) => {
        return [...matchedBankNames, humanName].includes(bankName);
    });

    return bankLogoItem?.fileName ?? UNKNOWN_BANK_FILE_NAME;
};

export const getBankLogoName = (bankName: string): string => {
    const bankLogoItem = banks.find(({ matchedBankNames, humanName }) => {
        return [...matchedBankNames, humanName].includes(bankName);
    });

    return bankLogoItem?.humanName ?? bankName;
};