
export interface IUser {
    _id: string;
    name: string;
    email: string;
}

export type TUser =  IUser & {
    token: string;
}

export interface IUserReducerInitialState {
    user: TUser | null;
    loading: boolean;
}

export interface ILoginUserApi {
    email: string,
    password: string,
}



export interface IRegisterUserApi extends ILoginUserApi {
    name: string,
}





