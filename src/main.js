/**
 * Created by yhtut on 13/11/15.
 */
import React from 'react';
import EventManagerComponent from './event-manager-component';

var props = {
    source: 'data/events.json'
};

React.render(
    <EventManagerComponent {...props} />,
    document.getElementById('event-manager-component-wrapper')
);