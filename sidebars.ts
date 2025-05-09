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
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/account-setup',
        'getting-started/wallet-setup',
      ],
    },
    {
      type: 'category',
      label: 'For Creators',
      items: [
        'creators/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'For Backers',
      items: [
        'backers/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/account-settings',
      ],
    },
    {
      type: 'category',
      label: 'Additional Information',
      items: [
        'contributing',
        'faq',
        'license',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
