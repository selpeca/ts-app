export enum ROLES{
  ADMIN ="admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User ={
  username:string,
  role: ROLES
}

const selpecaUser:User ={
  username:"selpeca",
  role:ROLES.ADMIN
}
