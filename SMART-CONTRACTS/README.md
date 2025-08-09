

## **README — Edufunds Smart Contract**


# Edufunds Smart Contract

This is the **smart contract** for the Edufunds platform.  
It manages student stipend allocations and withdrawals securely on the **Celo blockchain**.

---

## 🚀 Features
- 📜 Stipend creation by **parents**
- 🎓 Stipend claims by **students**
- 🔒 Access control to prevent misuse
- ⛓ Deployed on Celo blockchain

---

## 🛠 Tech Stack
- **Solidity** — Smart contract language
- **Hardhat** — Ethereum development environment
- **OpenZeppelin** — Secure contract libraries
- **Celo** — Blockchain network

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/austineblaise/Edu-Funds.git
cd SMART-CONTRACTS



2️⃣ Install dependencies

npm install
# or
yarn install


▶️ Compile the Smart Contract
npx hardhat compile


🧪 Run Tests
npx hardhat test


🔗 Deploy to Celo Alfajores Testnet
1️⃣ Create .env file

PRIVATE_KEY=your_wallet_private_key
CELO_ALFAJORES_RPC=https://alfajores-forno.celo-testnet.org


2️⃣ Deploy script

npx hardhat run scripts/deploy.js --network alfajores


2️⃣ Deploy script
npx hardhat run scripts/deploy.js --network alfajores