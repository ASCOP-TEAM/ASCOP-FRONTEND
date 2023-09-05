export interface Payer {
  phone: {
    area_code: string | null;
    number: number;
  };
  address: {
    zip_code: string;
    street_name: string;
    street_number: number;
  };
  email: string;
  identification: {
    number: string;
    type: string;
  };
  name: string;
  surname: string;
  date_created: Date;
  last_purchase: Date;
}
