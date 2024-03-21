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
          button: {
            text: 'Website',
            url: 'https://ellemments.com/',
            target: '_self',
          },
        },
      ],
    },
  ],
});