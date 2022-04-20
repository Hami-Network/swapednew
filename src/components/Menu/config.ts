import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: t('Referral'),
  //   icon: 'GroupsIcon',
  //   href: '/referral',
  // },
  {
    label: 'Games',
    icon: 'PredictionsIcon',
    href: '/games',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Join',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/lokiswap',
      },
      {
        label: 'Youtube',
        href: 'https://www.youtube.com/channel/',
      },
      {
        label: 'Reddit',
        href: 'https://www.reddit.com/r/lokiswap/',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/lokiswap/',
      },
      {
        label: 'Tiktok',
        href: 'https://www.tiktok.com/@lokiswap?lang=en',
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/lokiswap',
      },
    ],
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dextools',
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0x4054cD657986251693e18261b2a2b99914e2b257',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0xb03B19aB28EC881A236448240F31570b1Ff8894a',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/lokiswap',
      },
      {
        label: 'Doc',
        href: 'https://docs.lokiswap',
      },
      // {
      //   label: 'Doc(ES)',
      //   href: 'https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:fd65c188-08dd-4de7-9217-5a1ca307ab97',
      // },
     
    ],
  },
  // {
  //   label: 'Join Our Farm',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSerA87JRjIwbqIBP7OqmD-b3E0pawIRbQ9dc74Lcuf6TbzqHA/viewform',
  // }
]

export default config
