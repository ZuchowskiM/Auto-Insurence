export interface ICarOwner {
  id: number;
  name: string;
  surname: string;
  createdAt: string;
}

export interface ICreateCarOwnerDto {
  name: string;
  surname: string;
}

export interface ICar {
  id: number;
  createdAt: string;
  brand: string;
  model: string;
  productionYear: number;
  ownerName: string;
  carOwnerId: number;
}

export interface ICreateCar {
  brand: string;
  model: string;
  productionYear: number;
  carOwnerId: number;
}
