export class User {
  gender: 'male' | 'female';
  name: Name;
  location: Location;
  email: string;
  login: LoginData;
  dob: AgeData;
  registered: AgeData;
  phone: string;
  cell: string;
  id: number;
  picture: PictureData;
  nat: string;
}

export class Name {
  title: string;
  first: string;
  last: string;
}

export class Location {
  street: Street;
  city: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export class Street {
  number: number;
  name: string;
}

export class Coordinates {
  latitude: string;
  longitude: string;
}

export class Timezone {
  offset: string;
  description: string;
}

export class LoginData {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export class AgeData {
  date: string;
  age: number;
}

export class PictureData {
  large: string;
  medium: string;
  thumbnail: string;
}
