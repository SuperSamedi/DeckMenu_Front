import { Role } from "./role";

export interface Account {

  username: string;
  email: string;
  roles: Role[];

}
