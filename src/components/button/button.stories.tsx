import React from 'react';
// import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
  title: 'Button',
  component: Button,
};

export const Hello = () => (
  <Button purpose="default">Hello World</Button>
)