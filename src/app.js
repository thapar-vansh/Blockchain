import Web3 from 'web3.js'

App = {
  contracts: {},

  load: async () => {
    Web3.eth.defaultAccount = Web3.eth.accounts[0]
    await App.loadWeb3()
    await App.loadAccount()
    await App.loadContract()
  },

  // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
  loadWeb3: async () => {
    if (typeof Web3 !== 'undefined') {
      App.Web3Provider = Web3.currentProvider
      Web3 = new Web3(Web3.currentProvider)
    } else {
      window.alert('Please connect to Metamask.')
    }

    if (window.ethereum) {
      window.Web3 = new Web3(ethereum)
      try {
        await ethereum.enable()
        Web3.eth.sendTransaction({
          /* ... */
        })
      } catch (error) {
        // User denied account access...
      }
    } else if (window.Web3) {
      App.web3Provider = Web3.currentProvider
      window.Web3 = new Web3(Web3.currentProvider)
      Web3.eth.sendTransaction({
        /* ... */
      })
    } else {
      console.log(
        'Non-Ethereum browser detected. You should consider trying MetaMask!'
      )
    }
  },

  loadAccount: async () => {
    // Set the current blockchain account
    App.account = Web3.eth.accounts[0]
  },

  loadContract: async () => {
    const todoList = await $.getJSON('TodoList.json')
    console.log(todoList)
    //     // Create a JavaScript version of the smart contract
    //     const todoList = await $.getJSON('TodoList.json')
    //     App.contracts.TodoList = TruffleContract(todoList)
    //     App.contracts.TodoList.setProvider(App.web3Provider)

    //     // Hydrate the smart contract with values from the blockchain
    //     App.todoList = await App.contracts.TodoList.deployed()
  },
}
$(() => {
  $(window).load(() => {
    App.load()
  })
})
