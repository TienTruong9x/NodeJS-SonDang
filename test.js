/*
	Script by JayremntB, 2020
	Unfollow all users who are not your friends
	Please copy all the code to make sure that you will not get any errors
	Before run this script, please navigate to https://www.facebook.com/me/following
 */

// You can change time delay below or not (in milliseconds, 1 s = 1000 ms)
let delayTime = 0;

// process, please don't modify
let _0x2668 = [
    'undefined',
    'User',
    'location',
    'props',
    'string',
    'split',
    'status',
    'Prepare\x20to\x20unfollow...',
    'parse',
    'Error:\x20',
    '\x20users\x20will\x20be\x20unfollowed...',
    'node',
    '👉\x20Unfollowed\x20',
    'includes',
    'length',
    'GET',
    'forEach',
    'responseText',
    'collectionToken',
    '\x20remaining...',
    'concat',
    'onreadystatechange',
    'find',
    'cookie',
    'push',
    'Unfollow\x20all\x20users\x20who\x20are\x20not\x20your\x20friends',
    'send',
    '__typename',
    'https://www.facebook.com/api/graphql/',
    'end_cursor',
    'slice',
    'sectionToken',
    'search',
    'user',
    'has_next_page',
    'data',
    'token',
    'keys',
    'then',
    'page_info',
    'CometUserUnfollowMutation',
    'PROFILE',
    'Script\x20by\x20JayremntB,\x202020',
    'edges',
    'open',
    'rootView',
    'RelayModern',
    'responseType',
    'log',
    'Please\x20navigate\x20to\x20\x22https://www.facebook.com/(your-username)/following\x22\x20before\x20run\x20this\x20script.',
    'readyState',
    'catch',
    'POST',
    '👌\x20DONE!',
    'exports',
    'pageItems',
    'DTSGInitialData',
    'stringify',
    'style_renderer',
    'https://www.facebook.com/ajax/bulk-route-definitions/',
    'Starting...',
    'payload',
    'Get\x20list\x20following...',
    'append',
    'collection',
    'pathname',
    'payloads',
    'WWW_COMET_PROFILE',
    'text',
];
(function (_0x18a564, _0x26682a) {
    let _0x1edebb = function (_0x4c27d9) {
        while (--_0x4c27d9) {
            _0x18a564['push'](_0x18a564['shift']());
        }
    };
    _0x1edebb(++_0x26682a);
})(_0x2668, 0x101);
let _0x1ede = function (_0x18a564, _0x26682a) {
    _0x18a564 = _0x18a564 - 0x0;
    let _0x1edebb = _0x2668[_0x18a564];
    return _0x1edebb;
};
let _0x744a1b = _0x1ede;
let fbDtsg = require(_0x744a1b('0x6'))[_0x744a1b('0x37')],
    uid = document[_0x744a1b('0x2a')]
        [_0x744a1b('0x18')](';')
        [_0x744a1b('0x29')]((_0x4c27d9) =>
            _0x4c27d9[_0x744a1b('0x20')]('c_user'),
        )
        [_0x744a1b('0x18')]('=')[0x1];
(() => {
    let _0x3cf118 = _0x744a1b;
    console[_0x3cf118('0x43')](_0x3cf118('0x3d')),
        console[_0x3cf118('0x43')](_0x3cf118('0x2c')),
        console[_0x3cf118('0x43')](_0x3cf118('0x44')),
        console[_0x3cf118('0x43')]('---------------------------'),
        console[_0x3cf118('0x43')](_0x3cf118('0xa')),
        getFollowingRouteInfo()
            [_0x3cf118('0x39')]((_0x5ead84) => {
                let _0x3b092b = _0x3cf118;
                return (
                    console[_0x3b092b('0x43')](_0x3b092b('0xc')),
                    getAllFollowing(_0x5ead84, 0x1f4)
                );
            })
            ['then']((_0x5d8cc2) => {
                let _0x5dfeb9 = _0x3cf118;
                let _0x5d84e8 = [];
                _0x5d8cc2[_0x5dfeb9('0x23')]((_0x3b7910) => {
                    let _0x1faf95 = _0x5dfeb9;
                    _0x3b7910[_0x1faf95('0x1e')][_0x1faf95('0x1e')][
                        _0x1faf95('0x2e')
                    ] === _0x1faf95('0x14') &&
                        _0x5d84e8[_0x1faf95('0x2b')](_0x3b7910);
                }),
                    console[_0x5dfeb9('0x43')](
                        _0x5d84e8[_0x5dfeb9('0x21')] + _0x5dfeb9('0x1d'),
                    ),
                    console['log'](_0x5dfeb9('0x1a'));
                let _0x532d9e = 0x0;
                setTimeout(function _0x4d5b29() {
                    let _0x4c6713 = _0x5dfeb9;
                    if (_0x532d9e < _0x5d84e8[_0x4c6713('0x21')])
                        unfollowNotFriend(
                            _0x5d84e8[_0x532d9e][_0x4c6713('0x1e')]['node'][
                                'id'
                            ],
                        )
                            ['then'](() => {
                                let _0xf7cada = _0x4c6713;
                                console[_0xf7cada('0x43')](
                                    _0xf7cada('0x1f') +
                                        (_0x532d9e + 0x1) +
                                        '\x20users.\x20' +
                                        (_0x5d84e8[_0xf7cada('0x21')] -
                                            _0x532d9e -
                                            0x1) +
                                        _0xf7cada('0x26'),
                                ),
                                    _0x532d9e++,
                                    setTimeout(_0x4d5b29, delayTime);
                            })
                            [_0x4c6713('0x1')]((_0x3b467a) => {
                                console['log'](_0x3b467a);
                            });
                    else console['log'](_0x4c6713('0x3'));
                }, 0x0);
            })
            ['catch']((_0x52797e) => {
                let _0x252d86 = _0x3cf118;
                console[_0x252d86('0x43')](_0x52797e),
                    console[_0x252d86('0x43')](
                        'Please\x20check\x20the\x20URL\x20again\x20if\x20you\x20did\x20not\x20navigate\x20to:\x20https://www.facebook.com/(your-username)/following',
                    );
            });
})();
function getNextListFollowing(_0x509ec9, _0x4f1282, _0x5ecb0e) {
    return new Promise((_0x4a3ecf, _0x51b3b1) => {
        let _0x5a7c71 = _0x1ede;
        request(_0x5a7c71('0x2'), 'https://www.facebook.com/api/graphql/', {
            fb_dtsg: fbDtsg,
            fb_api_caller_class: _0x5a7c71('0x41'),
            fb_api_req_friendly_name:
                'ProfileCometAppCollectionListRendererPaginationQuery',
            variables: {
                count: _0x5ecb0e,
                cursor: _0x4f1282,
                scale: 0x1,
                search: null,
                id: _0x509ec9['collectionToken'],
            },
            doc_id: 0xabdd4b9c393ee,
        })
            [_0x5a7c71('0x39')]((_0x377653) => {
                let _0x3f98ec = _0x5a7c71;
                try {
                    (_0x377653 = JSON[_0x3f98ec('0x1b')](_0x377653)),
                        _0x4a3ecf(
                            _0x377653[_0x3f98ec('0x36')]['node'][
                                _0x3f98ec('0x5')
                            ],
                        );
                } catch (_0x3ce9c0) {
                    _0x51b3b1(_0x3ce9c0);
                }
            })
            ['catch'](_0x51b3b1);
    });
}
function getAllFollowing(_0x206f81, _0x2e73d1) {
    return new Promise((_0xf96118, _0x50f644) => {
        let _0x21bc37 = _0x1ede;
        request(_0x21bc37('0x2'), _0x21bc37('0x2f'), {
            fb_dtsg: fbDtsg,
            fb_api_caller_class: _0x21bc37('0x41'),
            fb_api_req_friendly_name: 'ProfileCometTopAppSectionQuery',
            variables: {
                collectionToken: _0x206f81[_0x21bc37('0x25')],
                scale: 0x1,
                sectionToken: _0x206f81[_0x21bc37('0x32')],
                userID: uid,
            },
            doc_id: 0xbf03dcd6ed9ef,
        })
            [_0x21bc37('0x39')]((_0x534731) => {
                let _0x1f7525 = _0x21bc37;
                try {
                    _0x534731 = JSON[_0x1f7525('0x1b')](_0x534731);
                    let _0x411003 =
                        _0x534731['data'][_0x1f7525('0x34')][
                            'timeline_nav_app_sections'
                        ]['nodes'][0x0]['all_collections']['nodes'][0x0][
                            _0x1f7525('0x8')
                        ][_0x1f7525('0xe')][_0x1f7525('0x5')];
                    let _0x14fedb = _0x411003[_0x1f7525('0x3e')],
                        _0x4ef831 = _0x411003[_0x1f7525('0x3a')];
                    setTimeout(function _0x51b351(
                        _0x447baa = _0x4ef831[_0x1f7525('0x30')],
                    ) {
                        let _0x9c2b99 = _0x1f7525;
                        getNextListFollowing(_0x206f81, _0x447baa, _0x2e73d1)
                            [_0x9c2b99('0x39')]((_0x434c8c) => {
                                let _0x1f574d = _0x9c2b99;
                                _0x14fedb = _0x14fedb[_0x1f574d('0x27')](
                                    _0x434c8c[_0x1f574d('0x3e')],
                                );
                                if (
                                    !_0x434c8c[_0x1f574d('0x3a')][
                                        _0x1f574d('0x35')
                                    ]
                                ) {
                                    _0xf96118(_0x14fedb);
                                    return;
                                }
                                return setTimeout(
                                    _0x51b351(
                                        _0x434c8c[_0x1f574d('0x3a')][
                                            _0x1f574d('0x30')
                                        ],
                                    ),
                                    0x0,
                                );
                            })
                            [_0x9c2b99('0x1')](_0x50f644);
                    },
                    0x0);
                } catch (_0x8ce3ea) {
                    _0x50f644(_0x8ce3ea);
                }
            })
            [_0x21bc37('0x1')](_0x50f644);
    });
}
function getFollowingRouteInfo() {
    return new Promise((_0x325a78, _0x38e4e8) => {
        let _0x1b01d4 = _0x1ede;
        request(_0x1b01d4('0x2'), _0x1b01d4('0x9'), {
            fb_dtsg: fbDtsg,
            'route_urls[0]':
                window[_0x1b01d4('0x15')][_0x1b01d4('0xf')] +
                window[_0x1b01d4('0x15')][_0x1b01d4('0x33')],
        })
            ['then']((_0xdca624) => {
                let _0x4da329 = _0x1b01d4;
                try {
                    _0xdca624 = JSON[_0x4da329('0x1b')](
                        _0xdca624[_0x4da329('0x31')](0x9),
                    );
                    let _0x4d2f66 = Object[_0x4da329('0x38')](
                            _0xdca624[_0x4da329('0xb')][_0x4da329('0x10')],
                        )[0x0],
                        _0x45baf0 =
                            _0xdca624[_0x4da329('0xb')][_0x4da329('0x10')][
                                _0x4d2f66
                            ]['result'][_0x4da329('0x4')][_0x4da329('0x40')][
                                _0x4da329('0x16')
                            ];
                    _0x325a78(_0x45baf0);
                } catch (_0x18a6f9) {
                    _0x38e4e8(_0x18a6f9);
                }
            })
            [_0x1b01d4('0x1')](_0x38e4e8);
    });
}
function unfollowNotFriend(_0x37d89f) {
    return new Promise((_0x5c66df, _0x2ff01f) => {
        let _0x4ad788 = _0x1ede;
        request(_0x4ad788('0x2'), _0x4ad788('0x2f'), {
            fb_dtsg: fbDtsg,
            fb_api_caller_class: _0x4ad788('0x41'),
            fb_api_req_friendly_name: _0x4ad788('0x3b'),
            variables: {
                action_render_location: _0x4ad788('0x11'),
                input: {
                    subscribe_location: _0x4ad788('0x3c'),
                    unsubscribee_id: _0x37d89f,
                    actor_id: uid,
                    client_mutation_id: '7',
                },
                scale: 0x1,
            },
            doc_id: 0xd1a57d1fa7da0,
        })
            [_0x4ad788('0x39')](_0x5c66df)
            [_0x4ad788('0x1')](_0x2ff01f);
    });
}
function request(_0x374fc6, _0xd4b54b, _0x155dc4) {
    let _0x1e6ac1 = _0x744a1b;
    let _0x5a3031 = new FormData();
    if (_0x374fc6 === _0x1e6ac1('0x2'))
        for (let _0x2389af in _0x155dc4) {
            _0x5a3031[_0x1e6ac1('0xd')](
                _0x2389af,
                typeof _0x155dc4[_0x2389af] === _0x1e6ac1('0x17')
                    ? _0x155dc4[_0x2389af]
                    : JSON[_0x1e6ac1('0x7')](_0x155dc4[_0x2389af]),
            );
        }
    else {
        if (
            _0x374fc6 === _0x1e6ac1('0x22') &&
            typeof _0x155dc4 !== _0x1e6ac1('0x13')
        ) {
            _0xd4b54b += '?';
            for (let _0xf80838 in _0x155dc4) {
                _0xd4b54b +=
                    _0xf80838 + '=' + encodeURI(_0x155dc4[_0xf80838]) + '&';
            }
        }
    }
    return new Promise((_0x50d916, _0x1e9462) => {
        let _0x57078e = _0x1e6ac1,
            _0x329bbd = new XMLHttpRequest();
        _0x329bbd[_0x57078e('0x42')] = _0x57078e('0x12');
        try {
            _0x329bbd[_0x57078e('0x3f')](_0x374fc6, _0xd4b54b),
                _0x329bbd[_0x57078e('0x2d')](_0x5a3031),
                (_0x329bbd[_0x57078e('0x28')] = function () {
                    let _0x53b582 = _0x57078e;
                    if (_0x329bbd[_0x53b582('0x0')] === 0x4) {
                        if (_0x329bbd[_0x53b582('0x19')] !== 0xc8)
                            _0x1e9462(
                                _0x53b582('0x1c') +
                                    _0x329bbd[_0x53b582('0x19')],
                            );
                        else _0x50d916(_0x329bbd[_0x53b582('0x24')]);
                    }
                });
        } catch (_0x2538f3) {
            _0x1e9462(_0x2538f3);
        }
    });
}
