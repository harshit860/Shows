import React from 'react'

export default function Show(props) {
  const { show, addFavourte, showFavourite, removeFavourite } = props;
  const { name, image } = show;
  return (
    <div className="card p-2 col-xl-5 mt-2 shadow">
      <p className="text-center text-dark">{name}</p>
      <div className="container">
        <img src={image.medium} loading="lazy" />
      </div>
      <div className="row justify-content-center p-2">
        {showFavourite ? (
          <React.Fragment>
            <button className="btn btn-danger" onClick={() => removeFavourite(show)}>
              Remove from favourite
            </button>
          </React.Fragment>
        ) : (
            <React.Fragment>
              <button className="btn btn-warning" onClick={() => addFavourte(show)}>
                Add to favourite
              </button>
            </React.Fragment>
          )}

      </div>
    </div >
  )
}
