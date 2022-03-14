export interface IUser{
  id: number;
  email: string;
  salt: string;
  password: string;
  fullname: string;
}

export interface IPortfolio{
  id: number;
  name: string;
  description: string;
  link: string;
  image_url: string;
  type:"feature"|"fiction"|"podcast"|"research"
}