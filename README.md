# deno_chdb

Trying to make chdb work in deno

## versions

- Node 20.10.0
- Deno 1.42.4

## repro

```
npm install
deno run -A main.ts
```

output:

```
error: Uncaught (in promise) Error: Error in native callback
    at query (file:///Users/user/repos/deno_chdb/node_modules/chdb/index.js:12:19)
    at file:///Users/user/repos/deno_chdb/main.ts:3:13
```
