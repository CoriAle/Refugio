export interface Roles {
  us: boolean;
  admin?:  boolean;
}
export class Usuario {
  email:    string;
  nombre:  string;
  roles:    Roles;
  constructor(authData) {
    this.email    = authData.email
    this.nombre = authData.displayName
    this.roles    = { us: true }
  }
}