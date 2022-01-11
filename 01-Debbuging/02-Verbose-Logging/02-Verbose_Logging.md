# Verbose Logging<a id="Top-of-Page">
***
## Cotents<a id="Contents">
[Bottom of Page](#Bottom-of-Page)<br>
***
You can enable Hardhat's verbose mode by running it with its <code>--verbose</code> flag, or by setting the <code>HARDHAT_VERBOSE</code> environment to <code>true</code>.<br><br>
This mode will print a lot of output that can be super useful for debugging. An example of a Hardhat run in verbose mode is:
```bash
    Jason G@ALPHA-PCDI7560 MINGW64 ~/SOFTWARE-SOLIDITY/hardhat-
    $ npx hardhat test --verbose
      hardhat:core:config Loading Hardhat config from C:\Users\
      hardhat:core:global-dir Looking up Client Id at C:\Users\
      hardhat:core:global-dir Client Id found: 6c37a6de-a097-48
      hardhat:core:analytics Sending hit for /task/builtin +0ms
      hardhat:core:analytics Hit payload: {"v":"1","t":"pagevieT 6.1; Win64; x64)","cs":"Developer","cm":"User Type","cd1"
      hardhat:core:hre Creating HardhatRuntimeEnvironment +0ms
      hardhat:core:hre Running task test +207ms
      hardhat:core:hre Running task compile +1ms
      hardhat:core:hre Running task compile:get-compilation-tas
      hardhat:core:hre Running task compile:solidity +1ms
      hardhat:core:hre Running task compile:solidity:get-source
      hardhat:core:hre Running task compile:solidity:get-source

    Jason G@ALPHA-PCDI7560 MINGW64 ~/SOFTWARE-SOLIDITY/hardhat-
    $ npx hardhat test --verbose
      hardhat:core:hre Running task compile:solidity:handlsers\dle-compilation-jobs-failures +1ms
      hardhat:core:hre Running task compile:solidity:filter-compilation-jobs +0ms
      hardhat:core:tasks:compile '2' jobs were filtered out +46ms
      hardhat:core:hre Running task compile:solidity:merge-compilation-jobs +5ms
      hardhat:core:hre Running task compile:solidity:compile-jobs +1ms
      hardhat:core:tasks:compile No compilation jobs to compile +2ms
      hardhat:core:hre Running task compile:solidity:log:nothing-to-compile +1ms
      hardhat:core:hre Running task compile:solidity:log:compilation-result +51ms
      hardhat:core:hre Running task test:get-test-files +1ms   
      hardhat:core:hre Running task test:setup-test-environment +1ms
      hardhat:core:hre Running task test:show-fork-recommendations +0ms
      hardhat:core:hre Running task test:run-mocha-tests +1ms  


      hardhat:core:analytics Hit for "/task/builtin" sent successfully +681ms
      Token contract
        Deployment
      hardhat:core:hre Creating provider for network hardhat +207ms
          √ Should set the right owner (40ms)
          √ Should assign the total supply of tokens to the owner (56ms)

    Jason G@ALPHA-PCDI7560 MINGW64 ~/SOFTWARE-SOLIDITY/hardhat-tutorial (m
    $ npx hardhat test --verbose
    cation\Solidity\hardhat-tutorial\node_modules\hardhat\consoJasonGarciale.ardhat:core:global-dir Looking up Client Id at C:\Users\JasonGarciasol' added as dependency of 'E:\OneDrive\Documents\Educatio58-913b-698n\Sardhat:core:analytics Sending hit for /task/builtin +0msolidity\hardhat-tutorial\contracts\Token.sol' +0ms         w","tid":"U
      hardhat:core:hre Running task compile:solidity:get-compilct","cd2":"atiardhat:core:hre Creating HardhatRuntimeEnvironment +0ms
    on-job-for-file +34ms
      hardhat:core:compilation-job File 'E:\OneDrive\Documents\Eduardhat:core:hre Running task compile:get-compilation-tasks +0ms    cation\Solidity\hardhat-tutorial\node_modules\hardhat\console.ardhat:core:hre Running task compile:solidity:get-source-paths +0mssol' will be compiled with version '0.7.3' +1ms            -names +40m
      hardhat:core:hre Running task compile:solidity:handle-comency-graph pilardhat:core:hre Running task compile:solidity:read-file +1ms
    ation-jobs-failures +1ms                                   +25ms
      hardhat:core:hre Running task compile:solidity:filter-comssfully +35pilardhat:core:hre Running task compile:solidity:get-compilation-jobs ation-jobs +1ms                                            ed in '1' c
      hardhat:core:tasks:compile '2' jobs were filtered out +44ation-job-fms ardhat:core:compilation-job File 'E:\OneDrive\Documents\Education\S  hardhat:core:hre Running task compile:solidity:merge-compEducation\Silaoken.sol' +0ms
    tion-jobs +4ms                                             ation-job-f
      hardhat:core:hre Running task compile:solidity:compile-joEducation\Sbs ardhat:core:hre Running task compile:solidity:handle-compilation-jo+0ms                                                       pilation-jo
      hardhat:core:tasks:compile No compilation jobs to compilems +1ardhat:core:hre Running task compile:solidity:merge-compilation-jobms                                                         bs +0ms
      hardhat:core:hre Running task compile:solidity:get-compil +1msation-job-for-file +34ms                                   g-to-compil
      hardhat:core:compilation-job File 'E:\OneDrive\Documents\ation-resulEducation\Solidity\hardhat-tutorial\node_modules\hardhat\console.sol' will be compiled with version '0.7.3' +1ms       +1ms   
      hardhat:core:hre Running task compile:solidity:handle-comons +0mspilation-jobs-failures +1ms
      hardhat:core:hre Running task compile:solidity:filter-compilation-jobs +1ms
      hardhat:core:tasks:compile '2' jobs were filtered out +44ms
      hardhat:core:hre Running task compile:solidity:merge-comp73msilation-jobs +4ms
      hardhat:core:hre Running task compile:solidity:compile-joerbs +0ms
      hardhat:core:tasks:compile No compilation jobs to compile +1ms                                                      e0d17dc79c8
      hardhat:core:hre Running task compile:solidity:log:nothing-to-compile +1ms                                          d12fa4293bc
      hardhat:core:hre Running task compile:solidity:log:compilon '0.7.3' +1ms
      hardhat:core:hre Running task compile:solidity:han+1ms   cfffb92266
    dle-compilation-jobs-failures +1ms
      hardhat:core:hre Running task compile:solidity:fil
    ter-compilation-jobs +1ms
      hardhat:core:tasks:compile '2' jobs were filtered 
    out +44ms
      hardhat:core:hre Running task compile:solidity:mer
    ge-compilation-jobs +4ms
      hardhat:core:hre Running task compile:solidity:com
    pile-jobs +0ms
      hardhat:core:tasks:compile No compilation jobs to dhat +1
    compile +1ms
      hardhat:core:hre Running task compile:solidity:log
    :nothing-to-compile +1ms
      hardhat:core:hre Running task compile:solidity:log
    :compilation-result +44ms
      hardhat:core:hre Running task test:get-test-files 
    +1ms
      hardhat:core:hre Running task test:setup-test-envi
    s +4ms
      hardhat:core:hre Running task compile:solidity:compile-jobs +0ms
      hardhat:core:tasks:compile No compilation jobs to compile +1ms
      hardhat:core:hre Running task compile:solidity:log:nothing-to-compile +1ms
      hardhat:core:hre Running task compile:solidity:log:compilation-result +44ms
      hardhat:core:hre Running task test:get-test-files +1ms
      hardhat:core:hre Running task test:setup-test-environment +1ms
      hardhat:core:hre Running task test:show-fork-recommendations +0ms
      hardhat:core:hre Running task test:run-mocha-tests +1ms


      Token contract
        Deployment
      hardhat:core:hre Creating provider for network hardhat +173ms
          √ Should set the right owner (39ms)
          √ Should assign the total supply of tokens to the owner
        Transactions
    Sender balance is 1000000 tokens
    Trying to send 50 tokens to 0x70997970c51812dc3a010c7d01b50e0d17dc79c8
    Sender balance is 50 tokens
    Trying to send 50 tokens to 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc
          √ Should transfer tokens between accounts (203ms)
    Sender balance is 0 tokens
    Trying to send 1 tokens to 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
          √ Should fail if sender doesn't have enough tokens (165ms)
    Sender balance is 1000000 tokens
    Trying to send 100 tokens to 0x70997970c51812dc3a010c7d01b50e0d17dc79c8
    Sender balance is 999900 tokens
    Trying to send 50 tokens to 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc
          √ Should update balances after transfers (230ms)


      5 passing (3s)

      hardhat:core:cli Killing Hardhat after successfully running task test +0ms
```
Hardhat usese the <a href="https://github.com/visionmedia/debug" target="_blank">debug</a> package to manage logging. Th <code>DEBUG</code> environment variable can be used to turn on the verbose logging and filter it using a simple wildcard pattern.
***

[Top of Page](#Top-of-Page)<br>
[Contents](#Contents)<br>
<a id="Bottom-of-Page">