import { Meta, StoryObj } from '@storybook/react';
import { ButtonBase } from './Button';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Button',
    component: ButtonBase,
    argTypes: {
        onClick: { action: 'clicked' },
        color: {
            control: 'select',
            options: ['secondary', 'success', 'error']
        },
        variant: {
            control: 'select',
            options: ['contained', 'outlined', 'text']
        },
    },
} as Meta<typeof ButtonBase>;

type Story = StoryObj<typeof ButtonBase>;

export const Primary: Story = {
    args: {
        title: 'Primary Button',
        variant: 'contained',
        color: 'secondary',
        onClick: action('Primary Click'),
        disabled: false,
    },
};

export const Create: Story = {
    args: {
        title: 'Create Button',
        variant: 'contained',
        color: 'success',
        onClick: action('Create new item'),
        disabled: false,
    },
};

export const Delete: Story = {
    args: {
        title: 'Delete Button',
        variant: 'contained',
        color: 'error',
        onClick: action('Delete item'),
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        title: 'Disabled Button',
        variant: 'outlined',
        color: 'error',
        disabled: true,
    },
};

export const TextButton: Story = {
    args: {
        title: 'Text Button',
        variant: 'text',
        color: 'secondary',
        onClick: action('Text click button'),
        disabled: false,
    },
};