import "dotenv/config";

const IS_DEV = process.env.APP_VARIANT === "development";

export default ({ config }) => {
  return {
    ...config, // config here is already the normalized `expo` object from app.json
    name: IS_DEV ? "Dev Starter Expo" : "Dev Starter Expo",
    ios: {
      ...config.ios,
      bundleIdentifier: IS_DEV ? "com.devstarterexpo.app.dev" : "com.devstarterexpo.app",
    },
    android: {
      ...config.android,
      package: IS_DEV ? "com.devstarterexpo.app.dev" : "com.devstarterexpo.app",
    },
  };
};
