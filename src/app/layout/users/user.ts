export class User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  role: string;
  city: string;
  country: string;
  logged_on: string;
  gender: string;
  language: string;

  get fullName(){
    return `${this.first_name} ${this.last_name}`;
  }
}
