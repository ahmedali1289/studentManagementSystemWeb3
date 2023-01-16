// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
contract Todo {
    struct Task {
        string name;
        bool completed;
    }

    mapping(address => Task[]) public tasks;

    function addTask(string memory _name) public {
        tasks[msg.sender].push(Task(_name, false));
    }

    function completeTask(uint _index) public {
        require(tasks[msg.sender][_index].completed == false);
        tasks[msg.sender][_index].completed = true;
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks[msg.sender];
    }
}