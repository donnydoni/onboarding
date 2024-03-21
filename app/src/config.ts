import { defineConfig } from '@tok/generation';

export default defineConfig({
  pages: [
    {
      slides: [
        {
          extends: 'default',
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
          button: {
            text: 'Website',
            url: 'https://ellemments.com/',
            target: '_self',
          },
        },
        {
          extends: 'default',
          title: 'ellemments Website',
          description: 'You are now viewing the ellemments website within the web app.',
          button: {
            text: 'Go Back',
            onClick: () => {
              // Logic to go back to the first slide
              // You may need to consult the @tok/generation documentation for the specific syntax
              // For example: Telegram.WebApp.close();
            },
          },
        },
      ],
    },
  ],
});