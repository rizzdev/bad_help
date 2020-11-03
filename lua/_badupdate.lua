---
--- Bad Help
--- This file was created by "/usr/bin/rizz#0867"
--- https://github.com/rizzdev/bad_help
---

local me_version = 1.0
local me_service = 'bad_help'
local resource_link = ''

AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then
        return
    end

    -- Prevent interfering from server start
    Citizen.CreateThread(function()
        doServiceCheck()
    end)
end)

function doServiceCheck()
    local uri = 'htt://updater.rizzdevelopment.com/check/?name=' .. me_service .. '&version=' .. me_version
    PerformHttpRequest(uri, function(errorCode, resultData, resultHeaders)
        if resultData then
            local decoded = json.decode(resultData)
            if decoded and decoded.success then
                printResult(decoded.is_updated, decoded.current_version)
            end
        end
    end, 'GET', json.encode({ }), { ['Content-Type'] = 'application/json' })
end

function printResult(is_updated, current_version)
    print('[ ' .. me_service .. '] Checking updates. Current version is ' .. me_version)
    if is_updated then
        print('[ ' .. me_service .. '] Currently up to date')
    else
        print('--------------------------------------------')
        print('[ ' .. me_service .. '] Has a new update. New version is ' .. current_version)
        print('[ ' .. me_service .. '] Update at ' .. resource_link)
        print('--------------------------------------------')
    end
end
