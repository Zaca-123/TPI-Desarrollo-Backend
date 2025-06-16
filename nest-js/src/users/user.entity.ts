export class User {
  id: number;
  username: string;
  password: string;
  role: 'admin' | 'viewer'; // nuevo campo
}
