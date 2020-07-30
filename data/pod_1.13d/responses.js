const joinGame = {
  0x00: 'Game joining succeeded. In this case, Diablo 2 terminates the connection with the MCP and initiates the connection with the D2GS.',
  0x29: 'Password incorrect.',
  0x2A: 'Game does not exist.',
  0x2B: 'Game is full.',
  0x2C: 'You do not meet the level requirements for this game.',
  0x6E: 'A dead hardcore character cannot join a game.',
  0x71: 'A non-hardcore character cannot join a game created by a Hardcore character.',
  0x73: 'Unable to join a Nightmare game.',
  0x74: 'Unable to join a Hell game.',
  0x78: 'A non-expansion character cannot join a game created by an Expansion character.',
  0x79: 'A Expansion character cannot join a game created by a non-expansion character.',
  0x7D: 'A non-ladder character cannot join a game created by a Ladder character.'
}

const probablyNoInternet = 'Realm Unavailable: No Battle.net connection detected.'
const startup = {
  0x00: 'Success',
  0x02: probablyNoInternet,
  0x0A: probablyNoInternet,
  0x0B: probablyNoInternet,
  0x0C: probablyNoInternet,
  0x0D: probablyNoInternet,
  0x7E: 'CDKey banned from realm play.',
  0x7F: 'Temporary IP ban "Your connection has been temporarily restricted from this realm. Please try to log in at another time"'
}

const logon = {
  0x00: 'Success',
  0x01: 'Account doesn\'t exist',
  0x02: 'Invalid password',
  0x03: 'Account closed'
}
module.exports = { joinGame, startup, logon }
