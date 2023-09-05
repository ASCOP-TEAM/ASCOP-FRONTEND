import { Payer } from '@interfaces';

export const getDefaultPayer = (): Payer => {
  return {
    phone: {
      area_code: null,
      number: 0,
    },
    address: {
      zip_code: '',
      street_name: '',
      street_number: 0,
    },
    email: '',
    identification: { number: '', type: '' },
    name: '',
    surname: '',
    date_created: new Date(),
    last_purchase: new Date(),
  };
};
