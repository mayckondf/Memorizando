import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

  const reactotron = Reactotron.configure({ host })
    .useReactNative({
      networking: {
        ignoreUrls: /symbolicate|svg/,
      },
      editor: false,
      overlay: false,
    })
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .connect();

  reactotron.clear();
  console.tron = reactotron;
} else {
  console.tron = {
    log: () => {},
    warn: () => {},
    logImportant: () => {},
  };
}
