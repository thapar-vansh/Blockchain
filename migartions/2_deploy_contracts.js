var Migrations = artifacts.require("./migartions.sol")
module.exports = function(deployer){
    deployer.deploy(Migrations)
}