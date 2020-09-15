import { EmailValidator } from '../presentation/protocols/email-valitador'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: String): boolean {
    return false
  }
}
