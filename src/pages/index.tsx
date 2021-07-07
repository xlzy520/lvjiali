import React from 'react';

import Home from './Home';
// import GettingStarted from './GettingStarted/index';
// import Options from './Options';
// import Examples from './Examples';
import Upload from './Upload';
// import Help from './Help';
import Talk from './Talk';

export default [{
  id: 'home',
  title: '主页',
  disabled: false,
  isDefault: true,
  getComponent: () => <Home />
},
//   {
//   id: 'getting-started',
//   title: 'Getting Started',
//   disabled: false,
//   isDefault: false,
//   getComponent: () => <GettingStarted />
// },
//   {
//   id: 'options',
//   title: 'Options',
//   disabled: false,
//   isDefault: false,
//   getComponent: () => <Options />
// }, {
//   id: 'examples',
//   title: 'Examples',
//   disabled: true,
//   isDefault: false,
//   getComponent: () => <Examples />
// },
{
  id: 'upload',
  title: '照片上传',
  disabled: false,
  isDefault: false,
  getComponent: () => <Upload />
},
{
  id: 'talk',
  title: '想说的话',
  disabled: false,
  isDefault: false,
  getComponent: () => <Talk />
}
];
