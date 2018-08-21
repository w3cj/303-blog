# 303 Blog

A RESTful blog API. View the deployed blog here: https://303-blog.now.sh/

## Setup

This project uses knex/objection and the postgres driver. Update the `.env` files accordingly to connect to your database.

```
npm install
```

## Lint

```
npm run lint
```

## Test

* Update `.env.test` with your test db connection info
* Update scripts/test.sh with your test db name

```
npm run test
```

## Development

* Copy `.env.sample` to `.env`, update with your db connection information

```
npm run migrate
npm run seed
npm run dev
```

## Package Audit with snyk

```
npm run audit
```

---

