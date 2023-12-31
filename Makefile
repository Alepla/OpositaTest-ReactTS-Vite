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
	docker compose run --rm opositatest npm run test $(ARGS)

test-coverage:
	docker compose run --rm opositatest npm run coverage

format:
	docker compose run --rm opositatest npm run format 

lint-fix:
	docker compose run --rm opositatest npm run lint-fix

before-commit:
	make format && make lint-fix && make test