require "capistrano/node-deploy"
ssh_options[:forward_agent] = true
default_run_options[:pty] = true
# ssh_options[:auth_methods] = ["publickey"]
# ssh_options[:keys] = ["fluxaio.pem"]
set :application, "fluxa-cam"
set :repository,  "git@github.com:fluxa/fluxa-cam.git"
set :user, "pi"
set :scm, :git
set :node_user, "pi"
set :node_binary, "/usr/bin/node"
set :app_command, "app.js"
set :use_sudo, false
set :keep_releases, 2
role :app, "192.168.1.42"
set :deploy_to, "/home/pi/fluxa-cam"
set :app_environment, "NODE_PATH=./app/controllers PORT=7777"


# after "deploy", :config_server
