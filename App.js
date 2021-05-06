import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import Navigation from './app/navigations/Navigations';

import firebaseapp from './app/utils/firebase';
import * as firebase from 'firebase';


export default function App() {
  return (
    <Navigation></Navigation>
  );
}
