const config = {

    /**
     * Basic settings
     */
    settings: {
        page_height: 730,
    },

    /**
     * This is where we define pages. The pages and navbar will show in order listed here
     * The "contact us" and "commands" are prebuild pages that still **MUST** be defined here,
     * or they will not show
     */
    pages:  [
        {
            enabled: true,
            title: `Home`,
            contents: `This is some custom HTML. You can do anything here`
        },
        {
            enabled: true,
            title: `Commands / Hotkeys`,
            contents: `{commands}`,
        },
        {
            enabled: true,
            title: `Contact Us`,
            contents: `{contact}`,
        },
        {
            enabled: true,
            title: `Another Info Page`,
            contents: `See how magical this is`
        },
        {
            enabled: true,
            title: `Add more pages!`,
            contents: `It's super easy to do. `
        }
    ],

    /**
     * Should we enable the "contact us" module?
     * IMPORTANT: Make sure you update the discord webhook url in config.lua
     */
    contact: {
        wait_between_contact_us: 30, // In minutes, prevents spam on a discord server
        categories: ['General Inquiry', 'Player Report', 'Development Feedback']
    },

    /**
     * Commands
     */
    commands: [
        {
            name: 'General',
            items: [
                {
                    command: '/help',
                    info: 'Show this popup'
                },
                {
                    command: '/me',
                    info: 'Display "me doing" text on screen'
                },
                {
                    command: '/ad',
                    info: 'Post an add in chat for $1000'
                },
                {
                    command: '/tablet',
                    info: 'Opens personal tablet device'
                },
                {
                    command: '/mutead',
                    info: 'Toggle visibility of Advertisements in chat'
                },
                {
                    command: '/notepad',
                    info: 'Open your notepad'
                },
                {
                    command: '/cut',
                    info: 'Cut zipties using a blade'
                },
                {
                    command: '/carry',
                    info: 'Carry a person'
                },
                {
                    command: '/dice',
                    args: '{# of sides} {# of dice}',
                    info: 'Roll a die'
                },
                {
                    command: '/muteooc',
                    info: 'Toggle OOC chat visibility'
                },
                {
                    command: '/ooc',
                    args: '{message}',
                    info: 'Send out of character message. Should be used rarely'
                },
            ],
        },
        {
            name: 'Garment',
            items: [
                {
                    command: '/helmet',
                    args: '{0 - remove | 1 - put on}',
                    info: 'Toggle helmet/hat on/off'
                },
                {
                    command: '/glasses',
                    args: '{0 - remove | 1 - put on}',
                    info: 'Toggle glasses on/off'
                },
                {
                    command: '/mask',
                    args: '{0 - remove | 1 - put on}',
                    info: 'Toggle mask on/off'
                },
                {
                    command: '/removemask',
                    info: 'Remove the mask from the nearest person'
                },
            ],
        },
        {
            name: 'Vehicles',
            items: [
                {
                    command: '/cardoor',
                    args: '{open or close} {number (0-5)}',
                    info: 'Open/Close individual doors'
                },
            ],
        },
        {
            name: 'Racing',
            items: [
                {
                    command: '/racequit',
                    info: 'Abandon current race'
                },
                {
                    command: '/race',
                    args: '{beta amount} {0 - Use waypoint | 1- Random course}',
                    info: 'Start a race with a set waypoint or random'
                },
            ],
        },
        {
            name: 'Jobs',
            items: [
                {
                    command: '/cam',
                    info: 'Toggle camera. Must be signed in News job'
                },
                {
                    command: '/bmic',
                    info: 'Toggle boom mic. Must be signed in News job'
                },
                {
                    command: '/mic',
                    info: 'Toggle hand mic. Must be signed in News job'
                },
                {
                    command: '/taxifare {rate}',
                    info: 'Set the rates for your meter'
                },
            ],
        },
    ],

    /**
     * Hotkeys
     */
    hotkeys: [
        {
            name: 'General',
            items: [
                {
                    pressKey: 'I',
                    info: 'Open the inventory'
                },
                {
                    pressKey: 'DEL',
                    info: 'Pull up the phone (must be enabled and inside inventory)'
                },
                {
                    pressKey: 'U',
                    info: 'Toggles Car Door locks'
                },
                {
                    pressKey: 'X',
                    info: 'Put hands in the air'
                },
                {
                    pressKey: 'B',
                    info: 'Point in the direction you are facing'
                },
                {
                    pressKey: 'F5',
                    info: 'Show GPS minimap',
                    special: 'When on foot, you must have GPS enabled and inside inventory'
                },
                {
                    pressKey: 'Shift + F5',
                    info: 'Completely hide interface',
                },
            ]
        },
        {
            name: 'Vehicle',
            items: [
                {
                    pressKey: 'G',
                    info: 'Start / Stop the engine'
                },
                {
                    pressKey: 'U',
                    info: 'Toggles Car Door locks'
                },
                {
                    pressKey: 'F5',
                    info: 'Show GPS minimap',
                },
            ]
        },
        {
            name: 'Voice',
            items: [
                {
                    pressKey: '~',
                    info: 'Change voice range'
                },
                {
                    pressKey: 'CAPS LOCK',
                    info: 'PTT key to speak on radio'
                },
                {
                    pressKey: 'Teamspeak PTT Key',
                    info: 'Normal Voice Push to Talk',
                    special: 'This is set & comes from the teamspeak application'
                },
            ]
        },
        {
            name: 'Movement',
            items: [
                {
                    pressKey: 'Shift + Q',
                    info: 'Tackle (fall over)',
                    special: 'Must be running before pressing keys'
                },
            ]
        },
    ],

    locale: {
        'submitted': 'Your requested has been submitted',
        'not_enough': 'Field {name} is not enough characters. Minimum is {amount}',
        'too_many': 'Field {name} has too many characters. Maximum is {amount}',
        'missing_fields': 'Please ensure all fields are filled out',
        'post_error': 'There was an error processing your request',
        'wait_between': 'Please wait longer between submitting requests'
    }


}

export default config;