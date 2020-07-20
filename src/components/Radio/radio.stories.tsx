import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from './radio'

const defaultRadio = () => (
    <div>
        <Radio onClick={action('default Radio')}>default radio</Radio>
    </div>
)

const radioWithDisabled = () => (
    <div>
        <Radio onClick={action('disabled radio')}   disabled={true}>disabled radio</Radio>
        <Radio onClick={action('unDisabled radio')}  >unDisabled radio</Radio>
    </div>
)


storiesOf('Radio 按钮', module)
    .addParameters({
        info: {
            text: `
        ## 引用方法
        ~~~js
        import {Radio} from 'echo-rui
        ~~~
        `
        }
    })
    .add('默认 Radio', defaultRadio)
    .add('禁用的 Radio',radioWithDisabled)