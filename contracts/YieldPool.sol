// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract YieldPool {
    IERC20 public token;
    uint256 public constant APY = 5; // 5% annual yield

    struct DepositInfo {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => DepositInfo) public deposits;

    constructor(address _token) {
        token = IERC20(_token);
    }

    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be > 0");

        // Transfer tokens to this contract
        token.transferFrom(msg.sender, address(this), amount);

        deposits[msg.sender] = DepositInfo({
            amount: deposits[msg.sender].amount + amount,
            timestamp: block.timestamp
        });
    }

    function withdraw() external {
        DepositInfo memory dep = deposits[msg.sender];
        require(dep.amount > 0, "No deposit");

        // Calculate yield
        uint256 timeElapsed = block.timestamp - dep.timestamp;
        uint256 yieldEarned = (dep.amount * APY * timeElapsed) / (365 days * 100);

        uint256 payout = dep.amount + yieldEarned;

        // Reset deposit
        deposits[msg.sender].amount = 0;

        token.transfer(msg.sender, payout);
    }
}
