interface User {
  userId: number | null;
  name: string;
  username: string;
}

interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}

class UserService {
  private _user: User;
  private _tokens: JwtTokens;

  constructor() {
    this.user = {
      userId: 1,
      username: '@john_dole',
      name: 'John Dole'
    }
  }

  get user(): User {
    return this._user;
  }
  set user(user) {
    this._user = user;
  }

  get tokens() {
    return this._tokens;
  }

  set tokens(tokens) {
    this._tokens = tokens;
  }

  /**
   * Очистка токенов и инфы о юзере
   */
  logout() {
    this.tokens = {
      accessToken: '',
      refreshToken: ''
    }
    this.user = {
      userId: null,
      name: '',
      username: ''
    }
  }

  saveTokensToLocalStorage() {
    localStorage.setItem('TOKENS', JSON.stringify(this.tokens));
  }

  getTokensFromLocalStorage() {
    this.tokens = JSON.parse(localStorage.getItem('TOKENS')) || {
      accessToken: '',
      refreshToken: '',
    };
  }
}

export const useUserService = () => {
  let instance: UserService;

  return () => {
    if (!instance) {
      instance = new UserService();
    }

    return instance;
  }
}