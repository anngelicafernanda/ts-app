import { User, ROLES } from './01-enum';

const currentUser: User = {
  userName: 'Angelica',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const rta = checkAdminRole();
console.log('🚀 ~ file: 07-rest.ts:16 ~ rta:', rta);

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};
const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('🚀 ~ file: 07-rest.ts:28 ~ rta2:', rta2);

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('🚀 ~ file: 07-rest.ts:38 ~ rta3:', rta3);

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('🚀 ~ file: 07-rest.ts:48 ~ rta4:', rta4);
