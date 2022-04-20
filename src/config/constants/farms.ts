import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'LOKI',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xac34e490dcA7F31C6943002D61e4B722f6F8C592',
    },
    token: tokens.loki,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'LOKI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xac34e490dcA7F31C6943002D61e4B722f6F8C592',
    },
    token: tokens.loki,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'LOKI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x41f70BA0aBBedb86979308716AC84cDb235aC592',
    },
    token: tokens.loki,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xeA198912a0F177C1633EEB9D88E0c1B3b7E1347A',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
