import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
  // Custom sidebar with sections
  documentationSidebar: [
    // Rishu landing page at the top
    'index',

    // Core Documentation section
    {
      type: 'category',
      label: 'Documentation',
      collapsed: false,
      items: [
        'introduction',
        'getting-started',
        'faqs',
      ],
    },

    // Information section
    {
      type: 'category',
      label: 'Information',
      collapsed: false,
      items: [
        'roadmap',
        'partners',
      ],
    },

    // Legal section
    {
      type: 'category',
      label: 'Legal',
      collapsed: true,
      items: [
        'privacy-policy',
        'terms-and-conditions',
      ],
    },
  ],
};

export default sidebars;
