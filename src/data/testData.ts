export interface UserLoginData {
  email: string;
  password: string;
}

export const validUserLoginData: Record<string, UserLoginData> = {
  admin: {
    email: 'Kamo10@gmail.com',
    password: 'Kamo@2026',
  },
    normalUser: {
    email: 'Kamo10@gmail.com',
    password: 'Kamo@2026',
  }
};