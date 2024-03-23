import {Role} from "./role/role";

export class User {
  constructor(
    public username: string,
    public password: string,
    public email: string,
    public roles: Role[],
    public description: string,
    public discord: string,
    public telegram: string
  ) {
  }
}
