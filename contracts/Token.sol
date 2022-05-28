pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token is ERC20 {
    string public name = "Token";
    string public symbol = "TKN";
    uint public decimals = 18;

    constructor() {
        
    }
}