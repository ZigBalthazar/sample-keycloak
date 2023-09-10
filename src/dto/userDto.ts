export default class UserDto {
  username: string;
  email: string;
  password: string;

  constructor(model: any) {
    this.username = model.username;
    this.email = model.email;
    this.password = model.password;
  }
}
