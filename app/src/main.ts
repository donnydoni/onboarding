// main.ts
import { bootstrap } from '@tok/generation';
import App from './App.vue';
import { default as config } from './config';

bootstrap(App, config);

// telegramBot.ts
import TelegramBot from 'node-telegram-bot-api';

const token = "6327756542:AAEiwy1CGgBZC-fh8PgAswGv4SZohdANlhg";
export const bot = new TelegramBot(token, { polling: true });