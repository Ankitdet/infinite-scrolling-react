import React from 'react'
import QuestionList from './Component/Question/QuestionList'
import './index.css'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header" >
                    <h1>StackOverflow Questions</h1>
                </div>
                <QuestionList />
            </div>
        )
    }
}

export default App;