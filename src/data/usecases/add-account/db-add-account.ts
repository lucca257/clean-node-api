import { AddAccount, AddAcountModel } from '../../../domain/usecases/add-account'
import { AccountModel } from '../../../domain/models/account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAcount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAcountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
