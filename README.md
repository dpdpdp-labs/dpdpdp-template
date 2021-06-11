# DPDPDP workflow template

Template for building DPDPDP workflow with TypeScript SDK

## Installation

Clone the repository and install dependencies.

```sh
git clone https://github.com/autologie/dpdpdp-template.git && cd dpdpdp-template && yarn
```

## Usage

### Development

To start development locally, run following command to start TypeScript compiler in watch mode and server at localhost:8000

```sh
yarn start
```

If you want to use a different port, use `PORT` environment variable:

```sh
PORT=8888 yarn start
```

To create apps and receive jobs at the server in your localhost,

1. Use a tunneling tool such as ngrok to get a public URL for your localhost
1. If you haven't created a workflow yet, create one [here](https://hello-vercel-one.vercel.app/developers/workflows/new)
1. Choose "Use external HTTP endpoint as deployment" as deployment type
1. Set your public URL and save changes

### Test

```sh
yarn test
```

### Deployment

You can configure your workflow to either
- Trigger deployment on push to a branch on GitHub (recommended)
- Host function by yourself and point workflow to it, as described in local dev section

See [documentation](https://dpdpdp.web.app/docs/developing-workflows) for more details.
