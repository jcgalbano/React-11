// Imports
import React from 'react'
import styles from './styles'
import Card from 'react-bootstrap/Card'

// Component
const Comment = ({ commentName, commentContent, commentStyle, commentAvatar }) => {
  return(
    <Card style={styles[commentStyle]}>
      <Card.Img style={styles.commentAvatar} src={commentAvatar} />
      <Card.Body>
        <Card.Title style={ styles.commentName }>
          { commentName }
        </Card.Title>
        <Card.Text style={ styles.commentContent }>
          { commentContent }
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

// Export
export default Comment
