# Service Locator

With Service locator you can view all Helsinki's services that are found from endpoint [https://api.hel.fi/servicemap/v2/](https://api.hel.fi/servicemap/v2/). The backend, which is between the frontend and the Service Map API, only returns resources that are type of **unit**, which by definition are *concrete physical locations which provide services to citizens*.  

More information about Service Map API can be found here: [https://dev.hel.fi/apis/service-map-backend-api](https://dev.hel.fi/apis/service-map-backend-api) 

Service locator consists of following services:
- Frontend built with React (this repository)
- [Backend built with C#](https://github.com/jacker92/servicelocator-backend) 
- [Redis](https://hub.docker.com/_/redis)

## Prerequisites for local deployment
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Docker](https://docs.docker.com/engine/install/)

## How to deploy locally
1. Clone the project and cd to app directory
```bash
git clone https://github.com/jacker92/servicelocator-frontend.git
cd servicelocator-frontend
```

2. Run docker-compose
```bash
docker-compose up --build
```

3. Go to https://localhost:3000 to view the fabulous website.