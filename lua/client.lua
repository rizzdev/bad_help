---
--- Bad Help
--- This file was created by "/usr/bin/rizz#0867"
--- https://github.com/rizzdev/bad_help
---
---
local guiEnabled = false

function focusNUI (shouldDisplay)
    guiEnabled = shouldDisplay
    SetNuiFocus(guiEnabled, guiEnabled)
end

RegisterNetEvent('bad_help:show')
AddEventHandler('bad_help:show', function()
    focusNUI(true)
    SendNUIMessage({
        type = "help:toggle",
        enable = true,
    })
end)

RegisterNetEvent('blrp_help:show')
AddEventHandler('blrp_help:show', function()
    focusNUI(true)
    SendNUIMessage({
        type = "help:toggle",
        enable = true,
    })
end)

RegisterNetEvent('bad_help:hide')
AddEventHandler('bad_help:hide', function()
    focusNUI(false)
    SendNUIMessage({
        type = "help:toggle",
        enable = false,
    })
end)

-- This is just in case the resources restarted whilst the NUI is focused (for dev restarting)
Citizen.CreateThread(function()
    TriggerEvent('bad_help:hide')
end)


RegisterNUICallback('escape', function(data, cb)
    TriggerEvent('bad_help:hide')
    cb('ok')
end)

RegisterNUICallback('submitSupportRequest', function(data, cb)
    TriggerServerEvent('bad_help:submitDiscordRequest', data)
    cb('ok')
end)