# Serverless Compose Demo

This project was built to troubleshoot the lambda layer packaging with the serverless framework v4.4.3.

Start by setting up:

  $ yarn install

Attempt to package the project:

  $ serverless package

The output will be this:

```
Serverless ϟ Compose

✔ infra
 
✖ mw-api
    No file matches include / exclude patterns
 
Results: 1 services succeeded, 1 failed, 0 skipped, 2 total    Time: 10s
```
