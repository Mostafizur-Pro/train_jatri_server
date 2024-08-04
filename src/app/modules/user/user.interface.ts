import { Model } from 'mongoose'

export type IUser = {
  name: string
  number: string
  password: string
  email: string
  wallet: string
}
export type IUserMethods = {
  isUserExist(email: string): Promise<Partial<IUser> | null>
  
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>
}

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>
