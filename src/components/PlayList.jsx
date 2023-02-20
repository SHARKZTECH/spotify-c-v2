import React from 'react'

const PlayList = ({artists}) => {
  return (
    <div className='playlist_conatiner'>
     {artists?.map(artist=>(<h1>{artist.name}</h1>))}
    </div>
  )
}

export default PlayList