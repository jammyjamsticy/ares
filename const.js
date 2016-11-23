'use strict';

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_TOKEN || 'TYG2VE2HRJIV6BNA5LD2L2XJO4V5JJSQ';
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAGGQ9ZAaQDQBADZCghP5YINwUgYwxBdmVxFKMsg6ewkGVBT5ZC1rfJO3ZCxX5eYkBa1PWiV197cnNvqXuCOQ1ot1eu8q3dsvecsfPKLQBms4LTEMcO1t0q8qrmksJjwBLrnmhxJlCswOF5RXa9vnHYs73M4bvlm9jHUPmmCyAZDZD';

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it';
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};
