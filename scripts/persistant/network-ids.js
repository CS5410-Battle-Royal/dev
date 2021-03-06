// ------------------------------------------------------------------
//
// Shared module between Nodejs and the browser that defines constants
// used for network communication.
//
// The use of the IIFE is to create a module that works on both the server
// and the client.
// Reference for this idea: https://caolan.org/posts/writing_for_node_and_the_browser.html
//
// ------------------------------------------------------------------
(function(exports) {
    'use strict';

    Object.defineProperties(exports, {
        'INPUT': {
            value: 'input',
            writable: false
        },
        'INPUT_MOVE_DOWN': {
            value: 'moveDown',
            writable: false
        },
        'INPUT_MOVE_UP': {
            value: 'moveUp',
            writable: false
        },
        'INPUT_MOVE_LEFT': {
            value: 'moveLeft',
            writable: false
        },
        'INPUT_MOVE_RIGHT': {
            value: 'moveRight',
            writable: false
        },
        'INPUT_ROTATE_LEFT': {
            value: 'rotate-left',
            writable: false
        },
        'INPUT_ROTATE_RIGHT': {
            value: 'rotate-right',
            writable: false
        },
        'INPUT_FLIP': {
            value: 'flip',
            writable: false
        },
        'INPUT_FIRE': {
            value: 'fire',
            writable: false
        },
        'CONNECT_ACK': {
            value: 'connect-ack',
            writable: false
        },
        'CONNECT_OTHER': {
            value: 'connect-other',
            writable: false
        },
        'RECONNECT_OTHER': {
            value: 'reconnect-other',
            writable: false
        },
        'RECONNECT_SELF': {
            value: 'reconnect-self',
            writable: false
        },
        'DISCONNECT_OTHER': {
            value: 'disconnect-other',
            writable: false
        },
        'UPDATE_SELF': {
            value: 'update-self',
            writable: false
        },
        'CLICK': {
            value: 'click',
            writable: false
        },
        'UPDATE_OTHER': {
            value: 'update-other',
            writable: false
        },
        'UPDATE_OTHER_DELETE': {
            value: 'update-other-delete',
            writable: false
        },
        'MISSILE_NEW': {
            value: 'missile-new',
            writable: false
        },
        'MISSILE_HIT': {
            value: 'missile-hit',
            writable: false
        }
    });

})(typeof exports === 'undefined' ? this['NetworkIds'] = {} : exports);
