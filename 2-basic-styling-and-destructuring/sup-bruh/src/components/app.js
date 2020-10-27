import React from 'react'
import Comment from './comment/'

import reactAvatar from '../assets/images/react-avatar.png'
import worldAvatar from '../assets/images/world-avatar.png'

const firstUser = 'React-kun'
const secUser = 'World-senpai'

const firstComment = 'I send my greetings to the realm that encompasses matter'
const secComment = 'What is up my brother?'

const App = () => {
  return(
    <>
      <Comment
        commentName={firstUser}
        commentContent={firstComment}
        commentStyle='commentCardFirst'
        commentAvatar={reactAvatar}
      />
      <Comment
        commentName={secUser}
        commentContent={secComment}
        commentStyle='commentCardSec'
        commentAvatar={worldAvatar}
      />
    </>
  )
}

export default App
