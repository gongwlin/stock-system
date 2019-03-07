import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <div onClick={() => console.log('111111111111')}>Hello,world</div>

ReactDOM.render(<App />,document.getElementById('root'))