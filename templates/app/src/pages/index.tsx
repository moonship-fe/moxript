import React from 'react-dom';
import '@/styles';
import HelloWorld from '@/components/HelloWorld';

React.render(
    <HelloWorld />,
    document.body.appendChild(document.createElement('div'))
);