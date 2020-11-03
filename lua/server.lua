---
--- Bad Help
--- This file was created by "/usr/bin/rizz#0867"
--- https://github.com/rizzdev/bad_help
---

RegisterServerEvent('bad_help:submitDiscordRequest')
AddEventHandler('bad_help:submitDiscordRequest', function(data)
    if not data then return end

    local title = data.title
    local category = data.cat
    local contents = data.text
    local steam_name = GetPlayerName(source)
    local discord_name = 'Not Found'

    local identifiers = ExtractIdentifiers()

    if identifiers.discord then
        local simplified = string.gsub(identifiers.discord, 'discord:', '')
        discord_name = '<@' .. simplified .. '>'
    end

    local message = {
        embeds = {
            {
                title = title,
                description = contents,
                color = 7506394,
                fields = {
                    {
                        name = "Category",
                        value =  category,
                        inline = true
                    },
                    {
                        name = "Steam Name",
                        value = steam_name,
                        inline = true
                    },
                    {
                        name = "Discord Link",
                        value = discord_name
                    }
                }
            }
        }
    }

    if DISCORD_WEBHOOK_URL == 'change_me' then
        print('[bad_help] DISCORD_WEBHOOK_URL in bad_help/lua/config.lua is wrong!')
    end

    if DISCORD_WEBHOOK_URL ~= nil and DISCORD_WEBHOOK_URL ~= "" then
        PerformHttpRequest(DISCORD_WEBHOOK_URL, function(err, text, headers)
            print(err, json.encode(text), headers)
        end, 'POST', json.encode(message), { ['Content-Type'] = 'application/json' })
    end
end)

function ExtractIdentifiers()
    local identifiers = {
        steam = "",
        ip = "",
        discord = "",
        license = "",
        xbl = "",
        live = ""
    }

    --Loop over all identifiers
    for i = 0, GetNumPlayerIdentifiers(source) - 1 do
        local id = GetPlayerIdentifier(source, i)

        --Convert it to a nice table.
        if string.find(id, "steam") then
            identifiers.steam = id
        elseif string.find(id, "ip") then
            identifiers.ip = id
        elseif string.find(id, "discord") then
            identifiers.discord = id
        elseif string.find(id, "license") then
            identifiers.license = id
        elseif string.find(id, "xbl") then
            identifiers.xbl = id
        elseif string.find(id, "live") then
            identifiers.live = id
        end
    end

    return identifiers
end