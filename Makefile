.PHONY: test
build:
	docker compose build

start:
	docker compose up

stop:
	docker compose stop

down:
	docker compose down

test:
	docker compose run --rm opentest npm run test $(ARGS)

format:
	docker compose run --rm opentest npm run format 

lint-fix:
	docker compose run --rm opentest npm run lint-fix

before-commit:
	make format && make lint-fix && make test