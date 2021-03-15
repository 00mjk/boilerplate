import { Meta, Story } from '@storybook/react/types-6-0';
import { withKnobs, text } from '@storybook/addon-knobs';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as Meta;

export const Basic: Story = args => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text('Description', 'Typescript, ReactJs, NextJs e Styled Components')}
  />
);
