// used to mark unsupported tokens, these are hosted lists of unsupported tokens
/**
 * @TODO add list from blockchain association
 */
export const UNSUPPORTED_LIST_URLS: string[] = []
// 
// const COMPOUND_LIST = 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json'
// const UMA_LIST = 'https://umaproject.org/uma.tokenlist.json'
// const AAVE_LIST = 'tokenlist.aave.eth'
// const SYNTHETIX_LIST = 'synths.snx.eth'
// const WRAPPED_LIST = 'wrapped.tokensoft.eth'
// const SET_LIST = 'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json'
// const OPYN_LIST = 'https://raw.githubusercontent.com/opynfinance/opyn-tokenlist/master/opyn-v1.tokenlist.json'
// const ROLL_LIST = 'https://app.tryroll.com/tokens.json'
// const COINGECKO_LIST = 'https://tokens.coingecko.com/uniswap/all.json'
// const CMC_ALL_LIST = 'defi.cmc.eth'
// const CMC_STABLECOIN = 'stablecoin.cmc.eth'
// const KLEROS_LIST = 't2crtokens.eth'
//const GEMINI_LIST = 'https://www.gemini.com/uniswap/manifest.json'
const C2C_LIST = 'https://raw.githubusercontent.com/UdotCASH/u-exchange/main/src/constants/tokenLists/tokenList.json'

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  C2C_LIST,
  ...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [C2C_LIST]
