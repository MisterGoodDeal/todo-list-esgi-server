import { isEmailValid } from "../utils/helpers";

export class EmailSendService {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  /**
   * Function that send an email to the user when he has only 2 todos left on his account
   *
   * @returns boolean
   */
  sendReminderEmail = (): boolean => {
    console.log(
      `Hey ${this.email}! You already have a 8 todos! Only 2 remaining!`
    );

    return isEmailValid(this.email);
  };
}
