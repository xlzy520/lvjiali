// @ts-nocheck

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './assets/main.scss';
import App from './App'

// import AV from 'leancloud-storage'
// Init Leancloud
const AV = window.AV
AV.init({
  appId: 'ALiFTYngIaFGwwEj9VCT4n9l-gzGzoHsz',
  appKey: 'mCYfe3LBckRUxPoGdXKR08mv',
  serverURLs: 'https://aliftyng.lc-cn-n1-shared.com'
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
