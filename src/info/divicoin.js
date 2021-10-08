






const bcoinInfo = {
  type: 'divicoin',
  magic: 0x00000000,
  formats: ['bip44', 'bip32'],
  keyPrefix: {
    privkey: 0xd4,
    xpubkey: 0x22d2533,
    xprivkey: 0x221312b,
    xprivkey58: 'xprv',
    xpubkey58: 'xpub',
    coinType: 3
  },
  addressPrefix: {
    pubkeyhash: 0x1e,
    scripthash: 0xd
  }
}

const engineInfo = {
  network: 'divicoin',
  currencyCode: 'DIVI',
  gapLimit: 10,
  defaultFee: 1000,
  feeUpdateInterval: 10000,
  customFeeSettings: ['satPerByte'],
  simpleFeeSettings: {
    highFee: '526316',
    lowFee: '526316',
    standardFeeLow: '526316',
    standardFeeHigh: '526316',
    standardFeeLowAmount: '2000000000',
    standardFeeHighAmount: '98100000000'
  },
  minRelay: 100000000,
  timestampFromHeader(header) {
    if (header.length < 80) {
      throw new Error(`Cannot interpret block header ${header.toString('hex')}`)
    }
    return header.readUInt32LE(4 + 32 + 32)
  }
}

const currencyInfo = {
  // Basic currency information:
  currencyCode: 'DIVI',
  displayName: 'DIVI',
  pluginId: 'divicoin',
  denominations: [{ name: 'DIVI', multiplier: '100000000', symbol: 'Ɗ' }],
  walletType: 'wallet:divicoin',

  // Configuration options:
  defaultSettings: {
    customFeeSettings: ['satPerByte'],
    electrumServers: [
      'electrum://electrum-alts-wusa2.edge.app:50011',
      'electrum://electrum-alts-neuro.edge.app:50011'
    ],
    disableFetchingServers: false
  },
  metaTokens: [],

  // Explorers:
  blockExplorer: 'https://chainz.cryptoid.info/divi/block.dws?%s.htm',
  addressExplorer: 'https://chainz.cryptoid.info/divi/address.dws?%s.htm',
  transactionExplorer: 'https://chainz.cryptoid.info/divi/tx.dws?%s.htm'
}

export const divicoin = { bcoinInfo, engineInfo, currencyInfo }
