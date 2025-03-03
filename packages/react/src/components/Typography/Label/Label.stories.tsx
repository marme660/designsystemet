import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './';

const meta: Meta<typeof Label> = {
  title: 'Felles/Typography/Label',
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Preview: Story = {
  args: {
    children: 'Vennligst skriv inn fødselsnummer. 11 tegn',
    spacing: false,
    size: 'medium',
  },
};
