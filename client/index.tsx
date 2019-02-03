import * as React from 'react';
import { render } from 'react-dom';
import FirstHello from './components/FirstHello';

render(
    <FirstHello message="World" />,
    document.getElementById('root'),
);