// talking to the local blockchain
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // RPC host number for ganache
      port: 7545, // RPC port number for ganache
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}