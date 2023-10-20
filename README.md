This project uses the treblle-express sdk from [https://github.com/emee-dev/treblle_express](https://github.com/emee-dev/treblle_express) 

## Build the treblle sdk

```bash
## Clone the sdk repo
git clone https://github.com/emee-dev/treblle_express

cd treblle_express

## Install yalc globally
pnpm install -g yalc

## Install dependencies
pnpm install

## Build the sdk
pnpm run build

## Publish the sdk locally on your pc
yalc publish
```

### Use the sdk locally in this sample project
- I have not published this package on npm yet so am using yalc to deploy locally

```bash
## git clone the sample project
git clone https://github.com/emee-dev/test_sdk

cd test_sdk

## Install the sdk into this project using yalc
yalc add treblle-express

## Install project dependencies
pnpm install

## Create a .env file and add the `PROJECT_ID` and `API_KEY`

## Run the project
pnpm run dev
```

### SDK documentation 
More documentation of the SDK will be found at [Documentation](https://treblle-express-docs.vercel.app/)
