/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NewFeed from './screens/newfeed/NewFeed';

AppRegistry.registerComponent(appName, () => NewFeed);
