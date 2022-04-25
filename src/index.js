import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import ContainerApp from './ContainerApp';

library.add(fas, fab)

ReactDOM.render( <ContainerApp />, document.getElementById('root'));
