import { configure } from '@storybook/react';

// import global style for all our stories
import '../src/DUPLICATE_NGX_assets/css/main.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
