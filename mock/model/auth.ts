interface UserModel extends ApiAuth.UserInfo {
  token: string;
  refreshToken: string;
  password: string;
}

export const userModel: UserModel[] = [
  {
    token: `eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIwIiwiaXNzIjoiYWRtaW4iLCJ1YSI6ImZmNWQ4Iiwib2ciOiIxIiwiaWF0IjoxNjg5MDgyNTk3fQ.WoT7YjW693HLBBUM-Kf76xNXFzZ839s8S-bCWqfeHv0neoZW_0VqCihjqTzPT26EC-d_yxp6zpIGZLixAmJtxg`,
    refreshToken: '__REFRESH_TOKEN_SOYBEAN__',
    userId: '0',
    userName: 'Soybean',
    password: 'soybean123'
  },
  {
    token: '__TOKEN_SUPER__',
    refreshToken: '__REFRESH_TOKEN_SUPER__',
    userId: '1',
    userName: 'Super',
    password: 'super123'
  },
  {
    token: '__TOKEN_ADMIN__',
    refreshToken: '__REFRESH_TOKEN_ADMIN__',
    userId: '2',
    userName: 'Admin',
    password: 'admin123'
  },
  {
    token: '__TOKEN_USER01__',
    refreshToken: '__REFRESH_TOKEN_USER01__',
    userId: '3',
    userName: 'User01',
    password: 'user01123'
  }
];
