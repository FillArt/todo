import { Meta, StoryObj } from '@storybook/react';
import { BaseInput } from './Input';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Input',
    component: BaseInput,
    argTypes: {
        onKeyUpHandler: { action: 'key-up' },
    },
} as Meta<typeof BaseInput>;

type Story = StoryObj<typeof BaseInput>;

// @ts-ignore
export const Default: Story = () => {
    const [value, setValue] = useState('');

    const handleKeyUp = action('key-up');

    return (
        <BaseInput
            label="Enter text"
            value={value}
            setValue={setValue}
            onKeyUpHandler={handleKeyUp}
        />
    );
};