import { Request } from "express";

export interface LexioRequest extends Request {
  user: {
    accessToken: string;
  };
}

export interface LexioError extends Error {
  statusCode: number;
}

export interface ApiVersions {
  [key: string]: IApiServices;
}

export interface IApiServices {
  [key: string]: string;
}

export interface IUser {
  id: string;
  _id: string;
  username: string;
  email: string;
  statistics: object;
  identities: object;
  created: string;
  firebaseToken: string;
}

export interface IFullUser {
  id: string;
  _id: string;
  username: string;
  email: string;
  balance: number;
  statistics: object;
  identities: [IIdentity];
  created: string;
  firebaseToken: string;
  accessToken: string;
  roles: [string];
}

export interface IIdentity {
  profile: IProfile;
  credentials: {
    accessToken: string;
  };
  userId: string;
}

export interface IProfile {
  provider: string;
  id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
    middleName: string;
  };
  gender: string;
  emails: [{
    value: string;
  }];
  photos:[{
    value: string;
  }];
}

export interface IGame {
  id?: string;
  language: string;
  userId: string;
  user?: object;
  score: number;
  statistics: object;
  created?: string;
  serverDate?: string;
}

export interface IRanking {
  id: string;
  ranking: [IRankingItem];
  language: string;
  status: string;
  reference: string;
}

export interface IRankingItem {
  id: string;
  score: number;
  user: IUser;
}

export interface IAuthenticate {
  access_token: string;
  jwt: string;
}
