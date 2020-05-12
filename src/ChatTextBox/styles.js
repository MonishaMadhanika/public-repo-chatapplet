const styles = theme => ({

  sendBtn: {
    color: '#227092',
    cursor: 'pointer',
    '&:hover': {
      color: 'gray'
    }
  },

  chatTextBoxContainer: {
    position: 'absolute',
    bottom: '15px',
    left: '315px',
    boxSizing: 'border-box',
    overflow: 'auto',
    color: 'white',
    width: 'calc(100% - 300px - 50px)'
  },

  chatTextBox: {
    width: 'calc(100% - 25px)'
  }

});

export default styles;