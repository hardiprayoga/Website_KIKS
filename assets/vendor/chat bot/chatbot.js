  const chatBtn = document.getElementById('chatBtn');
  const chatBox = document.getElementById('chatBox');
  const closeBtn = document.getElementById('closeBtn');
  const chatBody = document.getElementById('chatBody');
  const userInput = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');

  const botResponses = [
    'I am KIKS Bot. How can I assist you?',
    'Our services include Social Media Management and Website Development. How can I help you with that?',
    'Feel free to ask any questions regarding our services or anything else.',
    'Thank you for chatting with KIKS Bot!'
  ];

  let currentResponse = 0;

  function appendBotResponse() {
    const botResponse = botResponses[currentResponse];
    const chatMessage = document.createElement('p');
    chatMessage.classList.add('bot-message');
    chatMessage.innerText = botResponse;
    chatBody.appendChild(chatMessage);
    currentResponse++;
    if (currentResponse >= botResponses.length) {
      currentResponse = 0;
    }
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  chatBtn.addEventListener('click', () => {
    chatBox.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    chatBox.style.display = 'none';
  });

  sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
      const chatMessage = document.createElement('p');
      chatMessage.classList.add('user-message');
      chatMessage.innerText = userMessage;
      chatBody.appendChild(chatMessage);
      userInput.value = '';
      appendBotResponse();
    }
  });

  userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      sendBtn.click();
    }
  });
