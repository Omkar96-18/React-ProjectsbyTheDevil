import React, {useState} from 'react'

function UserInput({ onSubmit }) {
   const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      try {
        onSubmit({city, country })
      } catch (error) {
        console.log(error);
      }
      
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          value={city}
          placeholder='Enter City'
          onChange={(e) => setCity(e.target.value)}
          />
          <input         
          type="text"
          value={country}
          placeholder='Enter Country'
          onChange={(e) => setCountry(e.target.value)}
          />
          <button type='submit'>
            Check Weather
          </button>
        </form>
      </>
    )
}

export default UserInput