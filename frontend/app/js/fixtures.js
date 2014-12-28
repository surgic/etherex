var ether = "1000000000000000000";
var tenEther = "10000000000000000000";
var precision = "100000000";

var fixtures = {
    ether: ether,
    tenEther: tenEther,
    precision: precision,
    addresses: {
        nameregs: ["0x72ba7d8e73fe8eb666ea66babc8116a41bfb10e2", "0x3f2af2a311132b3730328a7b30db1025cd8579c3"],
        etherex: "0xf298931b974dfb01b13e44eae9e4428afa3ba7f4"
    },
    trade_fields: 7,
    market_fields: 9,
    contract_desc: [
        {
            "name": "price",
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "price",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "buy",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "name": "market_id",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "sell",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "name": "market_id",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "trade",
            "inputs": [
                {
                    "name": "trade_ids",
                    "type": "uint256"
                },
                {
                    "name": "size",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "deposit",
            "inputs": [
                {
                    "name": "serpentbug",
                    "type": "uint256"
                },
                {
                    "name": "address",
                    "type": "hash256"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "market_id",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "withdraw",
            "inputs": [
                {
                    "name": "address",
                    "type": "hash256"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "market_id",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "cancel",
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "add_market",
            "inputs": [
                {
                    "name": "name",
                    "type": "uint256"
                },
                {
                    "name": "contract",
                    "type": "hash256"
                },
                {
                    "name": "decimals",
                    "type": "uint256"
                },
                {
                    "name": "precision",
                    "type": "uint256"
                },
                {
                    "name": "minimum",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "change_ownership",
            "inputs": [
                {
                    "name": "new_owner",
                    "type": "hash256"
                }
            ],
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "get_market",
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "name",
                    "type": "hash256"
                },
                {
                    "name": "contract",
                    "type": "hash256"
                },
                {
                    "name": "decimals",
                    "type": "uint256"
                },
                {
                    "name": "precision",
                    "type": "uint256"
                },
                {
                    "name": "minimum",
                    "type": "uint256"
                },
                {
                    "name": "last_price",
                    "type": "uint256"
                },
                {
                    "name": "owner",
                    "type": "hash256"
                },
                {
                    "name": "block",
                    "type": "uint256"
                },
                {
                    "name": "total_trades",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "get_trade_ids",
            "inputs": [
                {
                    "name": "market_id",
                    "type": "uint256"
                }
            ],
            "outputs": []
        },
        {
            "name": "get_trade",
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "id",
                    "type": "hash256"
                },
                {
                    "name": "type",
                    "type": "uint256"
                },
                {
                    "name": "market",
                    "type": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "name": "owner",
                    "type": "hash256"
                },
                {
                    "name": "block",
                    "type": "uint256"
                }
            ]
        },
        {
            "name": "get_sub_balance",
            "inputs": [
                {
                    "name": "address",
                    "type": "hash256"
                },
                {
                    "name": "market_id",
                    "type": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ]
        },
    ]
};

module.exports = fixtures;