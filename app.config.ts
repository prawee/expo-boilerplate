import { ExpoConfig, ConfigContext } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Milvasoft',
  description: 'Milvasoft App Description',
  slug: 'milvasoft',
  scheme: 'com.milvasoft.milvasoft',
  version: '1.0.0',
  sdkVersion: '50.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  runtimeVersion: {
    policy: "sdkVersion"
  },
  assetBundlePatterns: [
    './src/assets/images/*'
  ],
  locales: {
    tr: './src/assets/languages/turkish.json',
    en: './src/assets/languages/english.json'
  },
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  ios: {
    bundleIdentifier: 'com.milvasoft.milvasoft',
    buildNumber: '1.0.0',
    infoPlist: {
      CFBundleAllowMixedLocalizations: true
    }
  },
  web: {
    bundler: "metro"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    package: 'com.milvasoft.milvasoft',
    versionCode: 1,
  },
  updates: {
    enabled: true,
    url: "https://u.expo.dev/ac035dbc-1a05-4965-9d13-244fe7b5aad5"
  },
  extra:{
    eas:{
      projectId: "ac035dbc-1a05-4965-9d13-244fe7b5aad5"
    }
  }

})
