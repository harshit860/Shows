import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Show from './show'

function AllShows(props) {
  const [loading, handleLoading] = useState(false)
  const [shows, handleShows] = useState([])
  const [favourite, handleFavourite] = useState([])
  const [showFavourite, handleFavouriteFlag] = useState(false)
  const [message, handleMessage] = useState('')

  const saveShows = (collection) => {
    handleShows(collection)
  }

  const runMessage = (message) => {
    handleMessage(message)
    setTimeout(() => handleMessage(''), 1500)
  }

  const addFavourte = (show) => {
    if (favourite.length >= 1) {
      if (favourite.filter(val => val.name == show.name).length > 0) {
        runMessage('Already Present')
      }
      else {
        handleFavourite(prev => [...prev, show])
      }
    }
    else {
      handleFavourite(prev => [...prev, show])
    }
  }


  const removeFavourite = (show) => {
    let favouriteNew = favourite.filter(val => val.name !== show.name)
    handleFavourite(favouriteNew)
  }


  useEffect(() => {
    handleLoading(true)
    axios.get('http://api.tvmaze.com/shows', {
      params: {
        page: 1
      }
    })
      .then(resp => {
        if (resp.status == 200) {
          handleLoading(false)
          saveShows(resp.data)
        }
      }
      )
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
          <div className="navbar " style={{ position: "fixed" ,top:0}}>
            <button className="btn btn-primary" onClick={() => handleFavouriteFlag(prev => !prev)}>
              {showFavourite ? 'Showing Favourites' : 'Show Favourite'}
            </button>
            <br></br>
            <p className="p-1 text-danger ">{message}</p>
          </div>
        )}

      {showFavourite ? (
        <div className="container" >
          <p className="text-center">Showing favorites</p>
          <div className="row justify-content-around">
            {favourite.map((val, index) => {
              return (
                <Show
                  show={val}
                  removeFavourite={() => removeFavourite(val)}
                  showFavourite={showFavourite}
                />
              )
            })}
          </div>
        </div>
      ) : (
          <div >
             <p className="text-center">Showing Shows</p>
            <div className="container mt-4">
              <div className="row justify-content-around mt-4">
                {shows.map((val, index) => {
                  return (
                    <Show
                      show={val}
                      addFavourte={() => addFavourte(val)}
                      howFavourite={showFavourite}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        )}
        
    </div>
  )
}
export default AllShows;
