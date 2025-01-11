import { Meta, StoryObj } from '@storybook/react';
import { BaseInput } from './Input'; // Укажите путь к вашему компоненту
import { useState } from 'react';
import { action } from '@storybook/addon-actions'; // Импортируем action

export default {
    title: 'Components/Input',
    component: BaseInput,
    argTypes: {
        onKeyUpHandler: { action: 'key-up' },   // Логируем событие нажатия клавиши
    },
} as Meta<typeof BaseInput>;

type Story = StoryObj<typeof BaseInput>;

// @ts-ignore
export const Default: Story = () => {
    const [value, setValue] = useState(''); // Локальное состояние в Storybook

    // Логирование события через Storybook Actions
    const handleKeyUp = action('key-up');

    return (
        <BaseInput
            label="Enter text"
            value={value}
            setValue={setValue} // Передаем локальное состояние и сеттер
            onKeyUpHandler={handleKeyUp} // Отслеживаем нажатие клавиш
        />
    );
};
