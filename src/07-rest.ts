import { User, ROLES } from "./03-enum"
const currentUser:User = {
  username:'selpeca',
  role:ROLES.CUSTOMER
}

export const checkAdminRole = () =>{
  if (currentUser.role === ROLES.ADMIN) {
    return true
  }
  return false
}

console.log("checkAdminRole",checkAdminRole());
export const checkRole = (role1:string, role2:string) =>{
  if (role1 === currentUser.role) {
    return true
  }
  if (role2 === currentUser.role) {
    return true
  }
  return false
}

console.log("checkRole",checkRole(ROLES.ADMIN,ROLES.SELLER));

export const checkRoleV2 = (roles:string[]) =>{
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false
}
console.log("checkRoleV2",checkRoleV2([ROLES.ADMIN,ROLES.CUSTOMER]));

export const checkRoleV3 = (...roles:string[]) =>{
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false
}

console.log("checkRoleV3",checkRoleV3(ROLES.ADMIN,ROLES.SELLER,ROLES.CUSTOMER));
