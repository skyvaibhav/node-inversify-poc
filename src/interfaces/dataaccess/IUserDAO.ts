import IGenericDao from "./IGenericDao";

export default interface IUserDAO<T,PK> extends IGenericDao<T,PK> {
    //  contains user specific operations
    //  for example  fetch primary address (at 0 index)
    //  getPrimaryAddress(userID: PK): string;
    //  or set a new password
    //  setNewUserPassword(userID: PK, newPassword: string) : void
}