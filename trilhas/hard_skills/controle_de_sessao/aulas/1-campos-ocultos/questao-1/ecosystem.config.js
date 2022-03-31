module.exports = {
  apps: [
    {
      script: "backend/server.js",
      cwd: "backend/",
      name: "Backend",
      watch: true
    },
    {
      script: "frontend/server.js",
      cwd: "frontend/",
      name: "Frontend",
      watch: true
    }
  ]
}