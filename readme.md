### Bad Help

> A super-configurable AIO for help and support handling

![image|40%](https://i.imgur.com/WQbCu7h.png)

## Features
* Multiple tab/content/command/hotkey/request system fully based on configuration
* Create new pages, remove pages, all through the config
* Both command & hotkey definition types, with group support
* Smart scrolling support
* Simple, yet powerful *Contact Us* system with discord webhook support
* Form validation for support requests
* Spam prevention with support requests
* *Lightweight*, running on jQuery instead of a framework
* Locale support for form validations

## Things to think about
* Any JS error will typically mean a config error, or syntax error

## Installation 
1. Install the resources, and enable it
2. Update the `config.lua` file with discord webhook
3. Add the event (below) to a hotkey or command
4. Edit the `config.js` to your liking
5. Use what is already in the config as an example

## Usage Guide

#### Show the help screen
```lua
TriggerEvent('bad_help:show')
```

#### Hide the help screen
```lua
TriggerEvent('bad_help:hide')
```

### Configuration Examples
<details>
#### Pages
```javascript
pages:  [
        {
            enabled: true,
            title: `Home`,
            contents: `This is some custom HTML. You can do anything here`
        },
        {
            enabled: true,
            title: `Commands / Hotkeys`,
            contents: `{commands}`, // This will evalute into a template
        },
        {
            enabled: true,
            title: `Contact Us`,
            contents: `{contact}`, // This will evalute into a template
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
```

#### Commands
```javascript
commands: [
        {
            name: 'General', // Command Group
            items: [
                {
                    command: '/help', // Name of the command
                    args: '{# inv number}', // OPTIONAL (display args)
                    info: 'Show this popup' // Details
                },
            ],
        },
    ],
```

#### Hotkeys
```javascript
hotkeys: [
        {
            name: 'General',
            items: [
                {
                    pressKey: 'I',
                    info: 'Open the inventory',
                    special: 'Important text to show' // OPTIONAL
                },
            ]
        },
    ],
```

#### Locale
```javascript
contact: {
        wait_between_contact_us: 30, // In minutes, prevents spam on a discord server
        categories: ['General Inquiry', 'Player Report', 'Development Feedback']
    },
```
</details>

## Download
https://github.com/rizzdev/bad_help

----

#### More Preview Pictures

![image|40%](https://i.imgur.com/Ls8hnGc.png)
![image|40%](https://i.imgur.com/mzbrndJ.png)
