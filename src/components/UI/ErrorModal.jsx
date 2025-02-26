import React from 'react'
import Card from './Card'
import Button from './Button'


const ErrorModal = (props) => {
  return (
    <div>
        <Card className='modal' >
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer className='actions'>
                <Button >Ok</Button>
            </footer>
        </Card>
    </div>
  )
}

export default ErrorModal