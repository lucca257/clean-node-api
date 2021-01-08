import { AddAccount, AddAcountModel, AccountModel, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAcount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAcountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    return await this.addAccountRepository.add({ ...accountData, password: hashedPassword })
  }
}
