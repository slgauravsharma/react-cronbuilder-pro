# React Cron Builder

React component to build [cron](https://ru.wikipedia.org/wiki/Cron) expression

## installation

```bash
npm install --save react-cronbuilder-pro
```

## demo

[Live demo](https://slgauravsharma.github.io/react-cronbuilder-pro/)

## usage

```ecmascript 6
import CronBuilder from  'react-cronbuilder-pro
import 'react-cronbuilder-pro/dist/bundle.css'

<CronBuilder
    cronExpression="*/4 2,12,22 * * 1-5"
    onChange={::console.log}
    showResult={false}
/>
```

component was inspired by [this util](https://abunchofutils.com/u/computing/cron-format-helper/)
