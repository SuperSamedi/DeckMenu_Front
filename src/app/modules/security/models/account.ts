import { AccountRole } from "./account-role";

export interface Account {

  username: string;
  email: string;
  roles: AccountRole[];

}
