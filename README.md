This project uses the TreblleExpress sdk from [https://github.com/emee-dev/treblle_express](https://github.com/emee-dev/treblle_express)

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

```bash
## git clone the sample project
git clone https://github.com/emee-dev/test_sdk

cd test_sdk

## Install project dependencies
pnpm install

## Install the sdk into this project
yalc add treblle-express


## Run the project
pnpm run dev
```
