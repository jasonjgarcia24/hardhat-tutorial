# Testing Smart Contracts with the Hardhat Network
Using the <strong>Hardhat Network</strong>, a local Ethereum network designed for development that is built-in and the default network in Hardhat, we can run automated tests. In these tests, we're going to use <strong>ethers.js</strong> to interact with the Ethereum contract we built in <a href="./01-Writing_and_Running_Smart_Contracts.md" target="_blank">01-Writing_and_Running_Smart_Contracts.md</a>'s <code><a href="../../contracts/Token.sol" target="_blank">Token.sol</a></code>, and <a href="https://mochajs.org/" target="_blank">Mocha</a> as our Javascript test framework runner for Node.js.
***
## Cotents<a id="Contents">
[Write a Token Smart Contract](#Write-a-Token-Smart-Contract)<br>
[Compile the Smart Contract](#Compile-the-Smart-Contract)<br>
[Bottom of Page](#Bottom-of-Page)<br>

***
## Writing Tests<a id="Writing-Tests">
- Create a new directory called <code>test</code> inside our project root directory and create a new file called <code>Token.js</code>. Use the below code to start in <code>Token.js</code>:<br>
```js
    const { expect } = require("chai");

    describe("Token contract", function () {
        it("Deployment should assign the total supply of tokens to the owner", async function () {
            const owner = await ethers.getSigners();
            // console.log(owner[0])

            const Token = await ethers.getContractFactory("Token");

            const hardhatToken = await Token.deploy();

            const ownerBalance = await hardhatToken.balanceOf(owner[0].address);
            expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        });
    })
```

- Running the command <code>npx hardhat test</code> should show the following output:
    
<center><img src="./img/01-npx_hardhat_test.png" alt="npx hardhat test"></center><br>
    
This means the test passed.
    
<b>Note</b>: If <code>console.log(owner[0])</code> was not commented out, the output would have included the [ethers.js Object](#ethers-js-Object):<br><br>
Now, let's dissect each line:<br>
```js
    const owner = await ethers.getSigners();</code>
```
A <code><a href="https://docs.ethers.io/v5/api/signer/" target="_blank">Signer</a></code> in ethers.js is an object that represents an Ethereum account. It's used to send transactions to contracts and other accounts. Here we're getting a list of the accounts in the node we're connected to, which in this case is the <strong>Hardhat Network</strong>. Altogether, we will get returned 20 signer account objects (<code>owner.length == 20</code>).<br><br>
The <code>ethers</code> variable is available in the global scope.
```js
    const Token = await ethers.getContractFactory("Token")
```
A <code>ContractFactory</code> in ethers.js is an abstraction used to deploy new smart contras, so <code>Token</code> here is  a factory for instances of our token contract.
```js
    const hardhatToken = await Token.deploy();
```
Calling <code>deploy()</code> on a <code>ContractFactory</code> will start the deployment, and return a <code>Promise</code> that resolves to a <code>Contract</code>. This is the object that has a method for each of your smart contract functions.
```js
    const ownerBalance = await hardhatToken.balanceOf(owner[0].address);
```
Once the contract is deployed, we can call our contract methos on <code>hardhatToken</code> and use them to get the balance of the owner account by calling <code>balanceOf()</code>.<br><br>
Remeber that the owner of the token who gets the entire supply is the account that makes the deployment, and when using the <code>hardhat-ethers</code> plugin <code>ContractFactory</code> and <code>Contract</code> instances are connected to the first signer by default. This means that the account in the <code>owner</code> variable executed the deployment, and <code>balanceOf()</code> should return the entire supply amount.
```js
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
```
Here we're again using our <code>Contract</code> instance to call a smart contract function in our Solidity code. <code>totalSupply()</code> returns the token's supply amount and we're checking that it's equal to <code>ownerBalance</code>, as it should.<br><br>
To do this we're using <a href="https://www.chaijs.com/" target="_blank">Chai</a> which is an assertions library. These asserting functions are called "matchers", and the ones we're using here actually come from <a href="https://getwaffle.io/" target="_blank">Waffle</a>. This is why we're using the <code>hardhat-waffle</code> plugin, which makes it easier to assert values from Ethereum.<br><br>
The entire list of Ethereum-specific matchers can be found <a href="https://ethereum-waffle.readthedocs.io/en/latest/matchers.html" target="_blank">in this setion</a> in Waffle's documentation.

#### ethers.js Object<a id="ethers-js-Object">
```
    SignerWithAddress {
      _isSigner: true,
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      _signer: JsonRpcSigner {
        _isSigner: true,
        provider: EthersProviderWrapper {
          _isProvider: true,
          _events: [],
          _emitted: [Object],
          formatter: [Formatter],
          anyNetwork: false,
          _networkPromise: [Promise],
          _maxInternalBlockNumber: -1024,
          _lastBlockNumber: -2,
          _pollingInterval: 4000,
          _fastQueryDate: 0,
          connection: [Object],
          _nextId: 42,
          _hardhatProvider: BackwardsCompatibilityProviderAdapter {
            _wrapped: FixedGasProvider {
              _wrapped: AutomaticSenderProvider {
                _wrapped: [HardhatNetworkProvider],
                _wrappedProvider: [HardhatNetworkProvider]
              },
              _wrappedProvider: AutomaticSenderProvider {
                _wrapped: [HardhatNetworkProvider],
                _wrappedProvider: [HardhatNetworkProvider]
              },
              _gasLimit: 30000000
            },
            _provider: FixedGasProvider {
              _wrapped: AutomaticSenderProvider {
                _wrapped: [HardhatNetworkProvider],
                _wrappedProvider: [HardhatNetworkProvider]
              },
              _wrappedProvider: AutomaticSenderProvider {
                _wrapped: [HardhatNetworkProvider],
                _wrappedProvider: [HardhatNetworkProvider]
              },
              _gasLimit: 30000000
            },
            sendAsync: [Function: bound sendAsync],
            send: [Function: bound send],
            _sendJsonRpcRequest: [Function: bound _sendJsonRpcRequest] AsyncFunction
          },
          _eventLoopCache: [Object],
          _network: [Object]
        },
        _address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        _index: null
      },
      provider: EthersProviderWrapper {
        _isProvider: true,
        _events: [],
        _emitted: { block: -2 },
        formatter: Formatter { formats: [Object] },
        anyNetwork: false,
        _networkPromise: Promise { [Object] },
        _maxInternalBlockNumber: -1024,
        _lastBlockNumber: -2,
        _pollingInterval: 4000,
        _fastQueryDate: 0,
        connection: { url: 'http://localhost:8545' },
        _nextId: 42,
        _hardhatProvider: BackwardsCompatibilityProviderAdapter {
          _wrapped: FixedGasProvider {
            _wrapped: AutomaticSenderProvider {
              _wrapped: [HardhatNetworkProvider],
              _wrappedProvider: [HardhatNetworkProvider]
            },
            _wrappedProvider: AutomaticSenderProvider {
              _wrapped: [HardhatNetworkProvider],
              _wrappedProvider: [HardhatNetworkProvider]
            },
            _gasLimit: 30000000
          },
          _provider: FixedGasProvider {
            _wrapped: AutomaticSenderProvider {
              _wrapped: [HardhatNetworkProvider],
              _wrappedProvider: [HardhatNetworkProvider]
            },
            _wrappedProvider: AutomaticSenderProvider {
              _wrapped: [HardhatNetworkProvider],
              _wrappedProvider: [HardhatNetworkProvider]
            },
            _gasLimit: 30000000
          },
          sendAsync: [Function: bound sendAsync],
          send: [Function: bound send],
          _sendJsonRpcRequest: [Function: bound _sendJsonRpcRequest] AsyncFunction
        },
        _eventLoopCache: { detectNetwork: null },
        _network: { chainId: 31337, name: 'unknown' }
      }
    }
```
    
Disecting 