# Evaluate Landing Pages 

## Technologies

- [NextJS](https://nextjs.org/) - Pages Router
- Material UI
- Axios

## Getting started

Check once whether you have read/write permissions for this repo and it uses a password-protected SSH key, after that clone the repo:

```bash
git clone git@github.com:teamgeeksolution/eval-landing-pages.git
```

Use node version 16:

```bash
node -v # to check node version
nvm use 16 # to use node version 16 (have to install nvm first)
```

Install packages:

```bash
yarn 
```

Start the NextJS app:

```bash
yarn dev
```

## Environment Variables

[Reference](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#test-environment-variables)

- `.env.development` is for dev environment
- `.env.production` is for production environment

Test default values will be loaded if NODE_ENV is set to test, though you usually don't need to do this manually as testing tools will address it for you.
