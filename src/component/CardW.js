
function CardW(props) {
    return (
        <div className='card p-5 w-full flex flex-col items-center bg-black/25 backdrop-blur rounded-xl'>
          <h1 className='text-md md:text-lg font-bold mb-5 text-white'>{props.dayy}</h1>
          <img src={props.icon} alt='suny'className='w-20 mb-3'/>
          <h2 className='text-lg text-white'>{props.temp}°c</h2>
        </div>
    )
}
export default CardW;