import {Role} from "./role/role";

export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public email: string,
    public roles: Role[]
  ) {
  }
}
