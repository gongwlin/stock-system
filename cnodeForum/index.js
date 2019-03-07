import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <div onClick={() => console.log('22222')}>He</div>

ReactDOM.render(<App />,document.getElementById('root'))