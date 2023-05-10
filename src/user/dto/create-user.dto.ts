export class CreateUserDto {
  id: number;

  username: string; // 用户名

  nickname: string;  //昵称

  password: string;  // 密码

  avatar: string;   //头像

  email: string;

  role: string;   // 用户角色

  create_time: string;

  update_time: string;
}
