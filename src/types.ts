export interface RegisterResponse extends UserInfo {}
export interface MovieResponse extends Movie {}

export interface LoginResponse {
  token: string;
}

export interface UserInfo {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
}

export interface Context {
  userInfo: UserInfo;
}

export interface Movie {
  id: string;
  name: string;
  duration: string;
  releaseDate: string;
  actors: string;
  rating: Number;
}