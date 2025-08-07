console.log("🚀 app.js is loading...");

const hamMenu = document.querySelector('.ham-menu');
const navBar = document.querySelector('.navbar');
if (hamMenu) {
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});
}
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element-to-animate');
    const texts = document.querySelectorAll('.text-to-animate');

    // ✅ Element Observer: Handles animations for elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('not-visible');
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));

    // ✅ Text Observer: Handles animations for text elements
    if (texts.length > 0) {
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('not-visible');
                } else {
                    entry.target.classList.add('not-visible');
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.5 });

        texts.forEach(el => textObserver.observe(el));
    }
});

// ✅ Fixed navbar scroll function with safety check
window.onscroll = function () {
    if (typeof myFunction === 'function') {
        myFunction();
    }
};
var navbar = document.querySelector('.navbar');

if (navbar) {
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}
}

// Chatbot functionality
class CocoonChatbot {
    constructor() {
        this.currentStep = 0;
        this.userData = {};
        this.steps = [
            {
                message: "Hello, I'm the Cocoon AI Agent. May I have your name?",
                field: "name",
                validation: (input) => input.trim().length > 0
            },
            {
                message: "Please enter your email address:",
                field: "email",
                validation: (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
            },
            {
                message: "Are there any therapy concerns you would like to share? (Optional - press Enter to skip)",
                field: "concerns",
                validation: (input) => true // Always valid since it's optional
            }
        ];
        
        this.init();
    }

    init() {
        this.chatMessages = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.chatSend = document.getElementById('chat-send');
        
        if (!this.chatMessages || !this.chatInput || !this.chatSend) {
            console.log('Chatbot elements not found, skipping initialization');
            return;
        }

        this.chatSend.addEventListener('click', () => this.handleSend());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSend();
        });

        // Start the conversation
        setTimeout(() => this.startConversation(), 1000);
    }

    startConversation() {
        this.chatInput.disabled = false;
        this.chatSend.disabled = false;
        this.addBotMessage(this.steps[0].message);
        this.chatInput.focus();
    }

    addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.textContent = message;
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.textContent = message;
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    handleSend() {
        const input = this.chatInput.value.trim();

        this.addUserMessage(input);
        this.chatInput.value = '';
        
        // Keep focus on input
        this.chatInput.focus();

        const currentStepData = this.steps[this.currentStep];
        
        // For optional fields, allow empty input
        if (currentStepData.validation(input) && (input || currentStepData.field === 'concerns')) {
            this.userData[currentStepData.field] = input || 'No specific concerns mentioned';
            this.currentStep++;

            if (this.currentStep < this.steps.length) {
                // Move to next step
                setTimeout(() => {
                    let nextMessage = this.steps[this.currentStep].message;
                    // Replace placeholders with user data
                    Object.keys(this.userData).forEach(key => {
                        nextMessage = nextMessage.replace(`{${key}}`, this.userData[key]);
                    });
                    this.addBotMessage(nextMessage);
                    this.chatInput.focus();
                }, 1000);
            } else {
                // Conversation complete
                setTimeout(() => {
                    this.completeConversation();
                }, 1000);
            }
        } else {
            // Invalid input
            setTimeout(() => {
                this.addBotMessage("I'm sorry, that doesn't look quite right. Could you please try again?");
                this.chatInput.focus();
            }, 500);
        }
    }

    completeConversation() {
        this.addBotMessage(`Thank you, ${this.userData.name}! Shanna will reach out to you soon. Have a wonderful day!`);
        
        // Send data to Formspree
        this.sendToFormspree();
        
        // Disable input
        this.chatInput.disabled = true;
        this.chatSend.disabled = true;
    }

    async sendToFormspree() {
        try {
            const response = await fetch('https://formspree.io/f/mgvzzqzo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.userData.name,
                    email: this.userData.email,
                    message: `Therapy concerns: ${this.userData.concerns}`,
                    _subject: 'New Inquiry from Cocoon AI Agent'
                })
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending to Formspree:', error);
            // Fallback to mailto if Formspree fails
            const recipientEmail = "shanna@cocoonmassageandwellness.com";
            const subject = "New Inquiry from Cocoon AI Agent";
            const body = `Name: ${this.userData.name}\nEmail: ${this.userData.email}\nConcerns: ${this.userData.concerns}`;
            window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CocoonChatbot();
});
