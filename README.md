# MERN Docker Compose

A simple MERN stack CRUD application, containerized with Docker Compose.

## Project Structure

```
mern-docker-compose/
├── frontend/        (React + Vite app)
├── backend/         (Express REST API)
└── compose.yaml     (Docker Compose config)
```

## Running with Docker Compose

### Start

```bash
docker compose up --build -d
```

| Service  | URL                   |
|----------|-----------------------|
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:5000 |
| MongoDB  | mongodb://localhost:27017 |

### Stop

```bash
docker compose down
```
