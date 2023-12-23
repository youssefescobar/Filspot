import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon />
            Home

        </div>
        <video className='video' autoPlay Progress controls src='https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4'/>
        
    </div>
  )
}

export default Watch