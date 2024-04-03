module.exports = {
  apps : [
    {
      name: "Svelte",
      cwd: "/var/www/html/svelte",
      script: "npm run dev || (rm -rf node_modules && npm install && npm run dev)"
    },
    {
      name: "Keystone",
      cwd: "/var/www/html/keystone",
      script: "npm run dev || (rm -rf node_modules && npm install && npm run dev)"
    }
  ]
}
