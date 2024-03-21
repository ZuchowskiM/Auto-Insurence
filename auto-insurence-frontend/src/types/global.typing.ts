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
