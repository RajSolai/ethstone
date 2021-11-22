# EthStone

Play Stone-Paper-Scissor and win ETH !

This project is purely for educational purposes and ETH provided are Ropsten Network test ETH which has no value :(

## Article

Read the Full article [here](http://solairaj.rf.gd/blog/)

## Project Structure

```
public
    |- Baloo-Regular-webfont.woff (font)
pages
    |- _app.jsx (from next.js)
    |- index.jsx (landing page)
    |- game
        |- gameutil.js (Code for game logic)
        |- web3details.js (Details of smart contract)
        |- web3util.js (To call smart contract functions)
        |- index.jsx (The game page)
        |- over.jsx (The Game over page)

```

## Build the app

```
$ yarn install
$ yarn build
$ yarn start
```

## Live version