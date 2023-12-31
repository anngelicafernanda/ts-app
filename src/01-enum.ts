export enum ROLES {
  ADMIN = 'admin ',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  userName: string;
  role: ROLES;
};

const angeUser: User = {
  userName: 'Angelica',
  role: ROLES.ADMIN,
};
