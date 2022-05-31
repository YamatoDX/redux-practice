export interface EachProfile {
  id: number;
  name: string;
  age: number;
  profession: string;
  country: string;
}

export interface ProfileState {
  profiles: EachProfile[];
}

export interface EachProduct {
  id: number;
  name: string;
  origin: string;
  expiryDate: number;
  price: number;
}

export interface ProductState {
  products: EachProduct[];
}
