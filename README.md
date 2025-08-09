# Edufunds Frontend

Edufunds is a decentralized funding platform for students and parents, built with **Next.js**, **Wagmi**, **RainbowKit**, and **Celo blockchain**.  
This is the **frontend application** that interacts with the Edufunds smart contracts.

---

## 🚀 Features
- 🔗 Connect with multiple wallets via RainbowKit
- 📱 Mobile-first responsive design
- 👨‍👩‍👧 Two user flows: **Parents** & **Students**
- 🔒 Secure blockchain transactions via Celo network
- 🖤 Dark theme UI with modern TailwindCSS styling

---

## 🛠 Tech Stack
- **Next.js 14+** — React framework
- **TypeScript** — Type safety
- **TailwindCSS** — Styling
- **Wagmi + RainbowKit** — Wallet connection
- **React Query** — Data fetching & caching
- **Celo** — Blockchain network

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/austineblaise/Edu-Funds.git


npm install
# or
yarn install


NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_CELO_RPC=https://forno.celo.org
NEXT_PUBLIC_CELO_ALFAJORES_RPC=https://alfajores-forno.celo-testnet.org


Get your WalletConnect Project ID from: https://cloud.walletconnect.com


▶️ Running the App
Development

npm run dev
Open http://localhost:3000 in your browser.

Production
npm run build
npm run start

