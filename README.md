# Service Locator

With Service locator you can view all Helsinki's services that are found from [https://api.hel.fi/servicemap](https://api.hel.fi/servicemap).

Service locator consists of following services:
- Frontend built with React (this repository)
- [Backend built with C#](https://github.com/jacker92/servicelocator-backend) 
- [Redis](https://hub.docker.com/_/redis)

## Prerequisites for local deployment
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## How to deploy locally
1. Clone the project and cd to app directory
```bash
git clone https://github.com/jacker92/servicelocator-frontend.git
cd servicelocator-frontend
```

2. Run docker-compose
```bash
docker-compose up
```

3. Go to https://localhost:3000 to view the fabulous website.