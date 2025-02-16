# 🌐 Decentralized Chat App

Chat berbasis Web3 tanpa server. Pesan langsung tersimpan di blockchain, tidak bisa dihapus atau dimanipulasi.

## ✨ Fitur
- **Tanpa Server** – Semua pesan tersimpan di blockchain.
- **Aman & Transparan** – Tidak bisa dihapus atau diubah.
- **Terintegrasi Metamask** – Login mudah dengan wallet Web3.
- **Teknologi Blockchain** – Dibangun dengan Solidity & Ethers.js.

## 🛠️ Teknologi yang Digunakan
- **Solidity** – Smart contract untuk menyimpan pesan.
- **Ethers.js** – Komunikasi antara frontend dan blockchain.
- **Metamask** – Otentikasi tanpa server.
- **HTML, CSS, JS** – Tampilan sederhana dan modern.

## 🚀 Cara Menjalankan
1. **Deploy Smart Contract** di jaringan testnet (Sepolia/Mumbai).
2. **Edit `script.js`**, masukkan alamat smart contract yang baru.
3. **Buka `index.html`** di browser, lalu hubungkan Metamask.
4. **Mulai chat!** Semua pesan akan langsung tersimpan di blockchain.

## 📂 Struktur Proyek
DecentralizedChatApp/ ├── contracts/ # Smart contract Solidity │ ├── Chat.sol ├── frontend/ # Tampilan UI dan logika frontend │ ├── assets/ │ │ ├── styles.css │ ├── js/ │ │ ├── script.js │ ├── index.html └── README.md


## 📌 Catatan
- Gunakan jaringan **testnet** sebelum deploy ke mainnet.
- Bisa ditambahkan **IPFS** untuk penyimpanan off-chain.
- Performa tergantung kecepatan jaringan blockchain.

## 🎯 Pengembangan Selanjutnya
- **Integrasi IPFS** untuk penyimpanan lebih hemat gas.
- **Dukungan chat grup** dengan smart contract multi-user.
- **Tampilan UI lebih interaktif** dengan framework seperti React.

