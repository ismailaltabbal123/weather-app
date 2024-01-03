
function Card(prop) {
    return (
    <div>
        <h3 className="text-md lg:text-2xl font-semibold text-white">{prop.header}</h3>
        <h3 className="text-sm lg:text-lg text-white/75">{prop.day}</h3>
    </div>
    )
}

export default Card;