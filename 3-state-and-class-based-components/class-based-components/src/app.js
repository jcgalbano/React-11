import React from 'react'

class App extends React.Component {
  state = {
    lessonCount: 3 
  }
  render () {
    return (
      <>
        <div className='messageCard' style={styles.messageCard}>
          <h5 style={styles.lessonNo}>
            Lesson {this.state.lessonCount}
          </h5>
          <p style={styles.lessonTitle}>
            Class-based Components
          </p>
        </div>
      </>
    )
  }
}

const styles = {
  messageCard: {
    backgroundColor: '#003B46',
    boxShadow: '5px 10px #66A5AD',
    width: 400,
    padding: 30
  },
  lessonNo: {
    backgroundColor: '#07575B',
    color: '#C4DfE6',
    fontFamily: 'Cure',
    fontSize: 50,
    margin: 0,
  },
  lessonTitle: {
    color: '#66A5AD',
    fontFamily: 'Poppins',
    fontSize: 30,
    margin: 0
  }
}

export default App
