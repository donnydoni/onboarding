import { defineConfig } from '@tok/generation';

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
            'One-click 0$ <b>deploy</b> on GitHub Pages',
            'Language and currency localization',
            'Buttons with <b>haptic</b> feedback',
            'Content pre-loading for high speed',
            '<b>Low-code</b> approach to building onboardings',
            'Many examples/presets',
          ],
          button: 'Website',
        },
        {
          extends: 'default', // Added the 'extends' property here
          media: {
            type: 'image',
            src: import('./assets/img/durov.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Onboarding supports many types of content',
          description:
            "Here you can see <b>Image</b>. But it's just the beginning...",
          button: [
            [
              {
                text: "View Store",
                web_app: {
                  url: "https://ellemments.com/"
                }
              }
            ]
          ]
        },
      ],
    },
  ],
});
