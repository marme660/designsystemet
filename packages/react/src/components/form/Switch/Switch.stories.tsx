import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Fieldset } from '../Fieldset';

import { Switch } from '.';

type Story = StoryObj<typeof Switch>;

export default {
  title: 'Felles/Switch',
  component: Switch,
} as Meta;

export const Preview: Story = {
  args: {
    children: 'Switch',
    disabled: false,
    readOnly: false,
    size: 'medium',
    position: 'left',
  },
};

export const FullWidth: StoryFn<typeof Switch> = (args) => (
  <Fieldset legend='Skru av/på en eller flere innstillinger'>
    <Switch
      description='Beskrivelse av innstilling'
      value='alt1'
      {...args}
    >
      Innstilling 1
    </Switch>
    <Switch
      value='alt2'
      {...args}
    >
      Innstilling 2
    </Switch>
    <Switch
      value='alt3'
      description='Velg innstilling 2 for å aktivere'
      disabled
      {...args}
    >
      Innstilling 3
    </Switch>
    <Switch
      value='alt4'
      description='Du mangler rettigheter for denne instillingen'
      readOnly
      {...args}
    >
      Innstilling 4
    </Switch>
  </Fieldset>
);

export const FullWidthRight = FullWidth.bind({});

FullWidthRight.args = {
  position: 'right',
};
