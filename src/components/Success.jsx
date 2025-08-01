import React from 'react'

const Success = () => {
  console.log('Thank you for submitting the form.', 'thank you')
  return (
    <div style={{backgroundColor: 'black', padding: '20px', height: '300px', border: '2px solid black'}}>
      <div style={{textAlign: 'center', backgroundColor: 'lightpink', padding: '20px', height:'200px'}}>
        <h2>Success!</h2>
        <p>Thank you for submitting the form.</p>
      </div>
    </div>
  )
}

export default Success;
