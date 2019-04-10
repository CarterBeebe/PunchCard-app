export default {
    MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "punchcardapp"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://punchcard-app.auth.us-east-2.amazoncognito.com"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_mOnVuOg7P",
    APP_CLIENT_ID: "48jmcttehk1a83acjpo2bqu7qh",
    IDENTITY_POOL_ID: "us-east-2:02f64b54-e7bd-4534-9b8d-cb2fae0149e4"
  }
};
