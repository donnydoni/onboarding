// Existing imports and bootstrap call from main.ts
import { bootstrap } from '@tok/generation';
import App from './App.vue';
import { default as config } from './config';
import TelegramBot, { Message, CallbackQuery } from 'node-telegram-bot-api';

// Bootstrap the existing app with the onboarding configuration
bootstrap(App, config);

// Additional code to handle inline buttons for the Telegram bot
const token = '6327756542:AAEiwy1CGgBZC-fh8PgAswGv4SZohdANlhg';
const bot = new TelegramBot(token, { polling: true });

// Function to send a message with inline buttons
function sendInlineButtons(chatId: number | string) {
  const inlineKeyboardMarkup = {
    inline_keyboard: [
      [
        {
          text: 'Start Onboarding',
          callback_data: 'onboarding'
        },
        {
          text: 'Visit Website',
          url: 'https://ellemments.com/'
        }
      ]
    ]
  };

  bot.sendMessage(chatId, 'Choose an option:', {
    reply_markup: inlineKeyboardMarkup
  });
}

// Listen for the /start command and respond with inline buttons
bot.onText(/\/start/, (msg: Message) => {
  const chatId = msg.chat.id;
  sendInlineButtons(chatId);
});

// Handle callback queries for the onboarding button
bot.on('callback_query', (callbackQuery: CallbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;

  if (data === 'onboarding') {
    // Trigger the onboarding process using the existing app configuration
    // This is a placeholder for the onboarding logic
    if (message) {
      bot.sendMessage(message.chat.id, 'Starting onboarding process...');
    }
  }
});
