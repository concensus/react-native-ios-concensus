# [Concensus](https://devpost.com/software/concensus)

> React Native iOS client for Concensus using Expo framework

## Getting Started

### Install Expo
* Install Expo XDE - https://expo.io/tools
* Install Expo iOS Client - https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8

More on Expo: http://expo.io

### Install npm dependencies

```bash
npm install
```

### Environment Variables
The application expects the following environment variables to be defined in `env.js`
* `TESTRPC_ADDRESS` - Required for local development
* `DEFAULT_GAS`
* `DEFAULT_USER_ID`

### Run application with Expo XDE
* Start Expo XDE
* Project > Open Project > Navigate to where you've cloned the project locally
* When opened, you'll see the log: `Project opened! You can now use the "Share" or "Device" buttons to view your project.`
* Share > Scan QR Code with iOS Expo app
* Expo will download the bundled application and run your application
