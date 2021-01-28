# express-playground

Try it with Swagger at:

http://localhost:8080/api-docs/

DOING:

4. Redis playgrounds

TODO: 2. Integration tests (with mocks) 7. Automate with envs 6. Bitbucket pipelines 8. Document

1. Unit tests
2. Integration tests

DONE: 5. Docker runner

System requirements:

- Install Docker: https://docs.docker.com/get-docker/
- Install Node.js: https://nodejs.org/es/download/

Start Redis:

```
docker run -p 6379:6379 --name redis-express-playground -d redis redis-server --appendonly yes
```
