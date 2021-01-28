# express-playground

Try it with Swagger at:

http://localhost:8080/api-docs/

DOING:

2. Integration tests (with mocks)
3. Automate with envs

TODO:

6. Bitbucket pipelines
7. Document

8. Integration tests

DONE:

1. Unit tests
2. Redis playgrounds
3. Docker runner

System requirements:

- Install Docker: https://docs.docker.com/get-docker/
- Install Node.js: https://nodejs.org/es/download/

Start Redis:

```
docker run -p 6379:6379 --name redis-express-playground -d redis redis-server --appendonly yes
```
