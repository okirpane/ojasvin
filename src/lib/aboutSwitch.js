import fsm from 'svelte-fsm';

const aboutSwitch = fsm('off', {
    off: {
        toggle: 'on',
        turnOn: 'on'
    },
    on: {
        toggle: 'off',
        turnOff: 'off'
    }
});

export { aboutSwitch }