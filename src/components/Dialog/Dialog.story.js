import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import Button from '../Button';
import Dialog from './Dialog';

storiesOf('Button', module).add(
    'Button',
    withInfo('Simple button')(() => (
        <div>
            <Button onClick={action('clicked')}>I am a button</Button>
            <Dialog />
        </div>
    ))
);
