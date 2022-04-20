import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'LokiSwap Finance',
  description:
    'The most popular AMM on BSC by user count! Earn LOKI through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by LOKI), NFTs, and more, on a platform you can trust.',
  image: 'https://lokiswap.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('LokiSwap Finance')}`,
      }
    case '/games':
      return {
        title: `${t('Games')} | ${t('LokiSwap Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('LokiSwap Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('LokiSwap Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Staking')} | ${t('LokiSwap Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('LokiSwap Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('LokiSwap Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('LokiSwap Finance')}`,
      }
    case '/referral':
      return {
        title: `${t('Referral')} | ${t('LokiSwap Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('LokiSwap Finance')}`,
      }
    case '/nft':
      return {
        title: `${t('NFT')} | ${t('LokiSwap Finance')}`,
      }
    default:
      return null
  }
}
