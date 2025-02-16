const CONTRACT_ADDRESS = "0xYOUR_CONTRACT_ADDRESS";
const ABI = [
    {"inputs":[{"internalType":"string","name":"_text","type":"string"}],"name":"sendMessage","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"getMessages","outputs":[{"internalType":"tuple[]","name":"","components":[{"internalType":"address","name":"sender","type":"address"},
    {"internalType":"string","name":"text","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"type":"tuple[]"}],
    "stateMutability":"view","type":"function"}
];

let provider, signer, contract;

async function connectWallet() {
    if (window.ethereum) {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        document.getElementById("account").innerText = `Connected: ${await signer.getAddress()}`;
        contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        loadMessages();
    } else {
        alert("Metamask not detected!");
    }
}

async function loadMessages() {
    const messages = await contract.getMessages();
    const chatBox = document.getElementById("messages");
    chatBox.innerHTML = "";
    messages.forEach(msg => {
        const li = document.createElement("li");
        li.innerText = `${msg.sender.substring(0, 6)}: ${msg.text}`;
        chatBox.appendChild(li);
    });
}

async function sendMessage() {
    const messageInput = document.getElementById("messageInput").value;
    if (messageInput.trim() === "") {
        alert("Message cannot be empty!");
        return;
    }
    const tx = await contract.sendMessage(messageInput);
    await tx.wait();
    loadMessages();
    document.getElementById("messageInput").value = "";
}

document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("sendMessage").addEventListener("click", sendMessage);
