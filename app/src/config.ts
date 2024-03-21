// config.ts
import { defineConfig } from '@tok/generation';
import TelegramBot, { Message } from 'node-telegram-bot-api';

const bot = new TelegramBot('6327756542:AAEiwy1CGgBZC-fh8PgAswGv4SZohdANlhg', { polling: true });

export default defineConfig({
  pages: [
    {
      slides: [
        {
          media: {
            type: 'image',
            src: import('./assets/img/uniqlo.jpg'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Welcome to ellemments TOKYO!',
          description: "ellemments",
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'Some cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'Some very cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'Some extremely cool feature',
            },
            'One-click 0$ <b>deploy</b> on GitHub Pages',
            'Language and currency localization',
            'Buttons with <b>haptic</b> feedback',
            'Content pre-loading for high speed',
            '<b>Low-code</b> approach to building onboardings',
            'Many examples/presets',
          ],
          button: 'Keyingi',
        },
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'Visit our website',
          description: "For more information, visit our website",
          button: {
            content: 'View Website',
            onClick: () => {
              bot.onText(/\/start/, async (msg: Message) => {
                const chatId = msg.chat.id;
                await bot.sendMessage(chatId, 'Welcome to ellemments', {
                  reply_markup: {
                    keyboard: [
                      [
                        {
                          text: "To view the store, press view",
                          web_app: {
                            url: "https://ellemments.com/"
                          }
                        }
                      ]
                    ]
                  }
                });
              });
            },
          },
        },
      ],
    },
  ],
});