import {storiesOf, action} from '@storybook/react'
import React from 'react'
import CronBuilder from '../CronBuilder'

storiesOf('CronBuilder', module)
    .add('default', () => <CronBuilder showSubmit  generateExpression={() => {}}

        onChange={action('got expression')}
    />)
    .add('do not show result', () => <CronBuilder showSubmit
        showResult={false}
        onChange={action('got expression')}
    />)
    .add('with predefined expression', () => <CronBuilder showSubmit
        cronExpression="*/4 10,20 * * 6-7"
        onChange={action('got expression')}
    />)
    .add('with predefined expression time frame', () => <CronBuilder showSubmit
        cronExpression="30 9-18 * * 1-5"
        onChange={action('got expression')}
    />);
