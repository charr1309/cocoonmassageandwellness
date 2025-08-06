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
                message: "Hello! I'm the Cocoon AI Agent. I'm here to help you learn about our massage therapy services. What's your name?",
                field: "name",
                validation: (input) => input.trim().length > 0
            },
            {
                message: "Nice to meet you, {name}! Could you please share your email address so we can follow up with you?",
                field: "email",
                validation: (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
            },
            {
                message: "Perfect! Now, are you experiencing any specific areas of tension, pain, or discomfort that you'd like our massage therapy to address? Or do you have any questions about our services?",
                field: "concerns",
                validation: (input) => input.trim().length > 0
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
        if (!input) return;

        this.addUserMessage(input);
        this.chatInput.value = '';

        const currentStepData = this.steps[this.currentStep];
        
        if (currentStepData.validation(input)) {
            this.userData[currentStepData.field] = input;
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
            }, 500);
        }
    }

    completeConversation() {
        const recipientEmail = "shanna@cocoonmassageandwellness.com";
        const subject = "New Inquiry from Cocoon AI Agent";
        const body = `Name: ${this.userData.name}\nEmail: ${this.userData.email}\nConcerns: ${this.userData.concerns}`;
        
        this.addBotMessage(`Thank you, ${this.userData.name}! I've collected your information. Shanna will reach out to you soon at ${this.userData.email} to discuss your massage therapy needs. Have a wonderful day!`);
        
        // Open email client
        setTimeout(() => {
            window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }, 2000);
        
        // Disable input
        this.chatInput.disabled = true;
        this.chatSend.disabled = true;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CocoonChatbot();
});
