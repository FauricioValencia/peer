import { AppRegistry } from 'react-native';
import Registry from './src/screens/registry/container/Registry';
// import Login from './src/screens/login/container/Login';
import {Peer} from './src/config/Routes';

AppRegistry.registerComponent('app', () => Peer);
