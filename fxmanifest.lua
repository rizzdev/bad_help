fx_version 'adamant'
games { 'gta5' }

client_script 'lua/client.lua'
server_script 'lua/server.lua'
server_script 'lua/_badupdate.lua'
server_script 'config.lua'

ui_page 'html/index.html'

files {
    'config.js',
    'html/index.html',
    'html/js/main.js',
    'html/js/jquery-3.5.1.min.js',
    'html/js/bootstrap.min.js',
    'html/css/main.css',
    'html/css/roboto.css',
    'html/css/bootstrap.min.css',
}
