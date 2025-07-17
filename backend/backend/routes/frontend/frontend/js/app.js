async function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;

  appendMessage('You', message);
  input.value = '';

  try {
    const res = await fetch('http://localhost:3000/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    appendMessage('Bot', data.reply);
  } catch (err) {
    appendMessage('Bot', 'Error contacting support.');
  }
}

function appendMessage(sender, text) {
  const messages = document.getElementById('messages');
  const msg = document.createElement('div');
  msg.textContent = `${sender}: ${text}`;
  messages.appendChild(msg);
}

// Ticket form submission
document.getElementById('ticketForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementB
