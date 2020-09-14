import faker from 'faker';

export class Company {
  private companyName: string;
  private catchFrase: string;
  private location: { lat: number; lng: number };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchFrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
