const getConfig = () => ({
  port: process.env.APP_PORT || 8080,
  database: {
    uri: process.env.APP_DATABASE_URL || '',
    options: {},
  },
  cloudFile: {
    cloudName: process.env.APP_CLOUD_NAME || '',
    apiKey: process.env.APP_API_KEY || '',
    apiSecret: process.env.APP_API_SECRET || '',
  }
});

export default getConfig;
