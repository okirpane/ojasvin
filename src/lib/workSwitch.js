import fsm from 'svelte-fsm';

const workSwitch = fsm('off', {
    off: {
        _enter () {
            console.log('off');
        },
        toggle: 'on',
        turnOn: 'on'
    },
    on: {
        _enter () {
            console.log('on');
        },
        toggle: 'off',
        turnOff: 'off'
    }
});

export { workSwitch }