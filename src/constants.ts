export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 2400;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 12;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  5: {
    DAI_ADDRESS: "0xc81c3568AF1776E00d51514B6477269339FDd7A3", // duplicate
    OHM_ADDRESS: "0xB4beDC61bBCB4dbf1bCa1A975B6eC69315BeE7c5",
    STAKING_ADDRESS: "0xE760a070E270DAe214F53f8d72FB6A7065bfBf35", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x5f619213c82AEFDdbD8EF6dCC3c30A5CC3d25207", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0xE760a070E270DAe214F53f8d72FB6A7065bfBf35",
    SOHM_ADDRESS: "0x88E9297A7b7db6BDDb317201957aCFDe7bEACDc4",
    OLD_SOHM_ADDRESS: "0x88E9297A7b7db6BDDb317201957aCFDe7bEACDc4",
    PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
    AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0xbDFD31d9F6C31954Bf3fd090DfFE2c7F455799E4",
    BONDINGCALC_ADDRESS: "0x48b5Bb822BC23c23091528B9db600E160FEF1646",
    CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
    TREASURY_ADDRESS: "0xBD5375F03522c5445d526b1d854b9670dC1E7d50",
    CRUCIBLE_OHM_LUSD: "0x2230ad29920D61A535759678191094b74271f373",
    LQTY: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
    MIST: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
    REDEEM_HELPER_ADDRESS: "0x23Ed920377F9b808e0Cd67dc294455a2f146e25E",
    FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
    FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
  },
};
