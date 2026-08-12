# ProgramGuru AWS React Demo

A small React + Vite application intended for an AWS Amplify Hosting tutorial.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production files are generated in `dist/`.

## Amplify Hosting

The included `amplify.yml` tells Amplify to:

1. Run `npm install`
2. Run `npm run build`
3. Publish the `dist` folder

Connect the GitHub repository to AWS Amplify Hosting and deploy the `main` branch.
