// lib/entities/wallet.ts

import type { Entity, CurrencyId } from '.'

export interface WalletData extends Entity {
  id: string
  name: string
  ownerAccountId: string
  currencyId: CurrencyId
  creationDate: Date
}

export const myWallet: WalletData = {
  id: 'myWallet',
  name: 'My Wallet',
  ownerAccountId: 'myAccount',
  currencyId: 'inexistantCurrency',
  creationDate: new Date('2020-01-01')
}
