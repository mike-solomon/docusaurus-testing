import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  docs: [
    'intro',
    {
      type: 'category',
      label: 'Foo',
      link: {
        type: 'generated-index',
        title: 'Foo',
        description: 'Learn about foos',
        slug: '/foo',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'How to',
          link: {
            type: 'generated-index',
            title: 'How to',
            description: 'Learn about foo how tos.',
            slug: '/foo/how-to',
            keywords: ['guides'],
          },
          items: [
            'foo/how-to/some-file'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Bar',
      link: {
        type: 'generated-index',
        title: 'Bar',
        description: 'Learn about bar',
        slug: '/bar',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'How to',
          link: {
            type: 'generated-index',
            title: 'How to',
            description: 'Learn about bar how tos.',
            slug: '/bar/how-to',
            keywords: ['guides'],
          },
          items: [
            'bar/how-to/some-file'
          ]
        },
      ]
    },
  ]
};

export default sidebars;
