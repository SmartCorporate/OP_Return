const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");
const statusDiv = document.getElementById("status");

messageInput.addEventListener("input", () => {
  charCount.textContent = messageInput.value.length;
});

function testMessage() {
  const msg = messageInput.value.trim();
  if (!msg) return updateStatus("⚠️ Enter a message first.");
  updateStatus(`🧩 HEX Preview: ${toHex(msg)}`);
}

function writeNow() {
  const msg = messageInput.value.trim();
  if (!msg) return updateStatus("⚠️ Enter a message first.");
  updateStatus("🚀 Sending message to Python backend (coming soon)...");
  // future: fetch('/api/write', { method: 'POST', body: JSON.stringify({ msg }) });
}

function writeFuture() {
  updateStatus("⏳ Scheduled write feature coming soon...");
}

function toHex(str) {
  return Array.from(str).map(c => c.charCodeAt(0).toString(16)).join("");
}

function updateStatus(text) {
  statusDiv.textContent = text;
}
