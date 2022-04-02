module.exports = {
  apps: [
    {
      script: "server.js",
      cwd: "./backend",
      name: "Backend",
      watch: true,
      ignore_watch: ['node_modules', '.git'],
      env: {
        "NODE_ENV": "development",
        "SERVER_PORT": 3333
      }
    },
    {
      script: "server.js",
      cwd: "./frontend",
      name: "Frontend",
      watch: true,
      ignore_watch: ['node_modules', '.git'],
      env: {
        "NODE_ENV": "development",
        "SERVER_PORT": 3334
      }
    }
  ]
}