


export interface EntryInterface{
  id:number,
  name:string,
  location:string,
  price:boolean,
  accessibility:boolean,
  season:string,
  accomodation:boolean,
  description:string,
  image:string,
  municipalityId:number
}

export interface EntryInterfaceForm{
  id:number,
  name:string,
  location:string,
  price:boolean,
  accessibility:boolean,
  season:string,
  accomodation:boolean,
  description:string,
  image:string,
  municipalityId:number[],
  categories:number[]
}


