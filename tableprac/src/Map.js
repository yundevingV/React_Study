import react from 'react'

function Map () {
    const widthPercentageMap = '50%'
    const heightPercentageMap = '100%'

    const map = {
        width : widthPercentageMap,
        height : heightPercentageMap,
        position : 'fixed',
        right :0

    }
    return (
        <>
            <div style={map}>
                <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/28baffee-1dc7-4195-add6-8020fdf9a15a.png"></img>
            </div>

        </>
    )
}

export default Map