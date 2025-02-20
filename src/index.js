import React from 'react'
import { render } from 'react-dom'
import Reveal from 'reveal.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/white.css'

import Slides from 'slides/index'

render(<Slides />, document.getElementById('root'), () =>
  Reveal.initialize({
    controls: false,
    progress: false,
    history: true,
    transitionSpeed: 'fast',
    backgroundTransition: 'none',
    keyboard: {
      34: 'next',
    },
  })
)
