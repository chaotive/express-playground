# express-playground

Try it with Swagger at:

http://localhost:8080/api-docs/

DOING:

6. Bitbucket pipelines

TODO:

7. Document
8. Automate with envs

DONE:

1. Unit tests
2. Redis playgrounds
3. Docker runner
4. Integration tests
5. Integration tests (with mocks)

System requirements:

- Install Docker: https://docs.docker.com/get-docker/
- Install Node.js: https://nodejs.org/es/download/

Start Redis:

```
docker run -p 6379:6379 --name redis-express-playground -d redis redis-server --appendonly yes
```
