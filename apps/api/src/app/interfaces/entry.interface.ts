export interface DbEntry{
  id:number,
  name:string,
  location:string,
  price:boolean,
  accessibility:string,
  season:string,
  accommodation:boolean,
  description:string,
  image:string,
  categories:number[],
  municipality:number[],
  regions:number,
  tags:string[]
}

