import Svg from './Svg';

const DrinkCard = ({img, name, price}) => {
    // Number(currency).toFixed(decimals) -> This convert a number to string, including decimals
    return(
        <div className="card drinkCard rounded shadow d-flex flex-column justify-content-center align-items-center h-100">
            {img && <img className="card-img-top" src={img || "drink-1.png"} style={{ width: 'auto', height: '40vmin' }} alt="drinkImg"/>}
            {!img && <div className="d-flex justify-content-center align-items-center" style={{ height: '40vmin' }}><Svg img="notImage" /></div>}
            <div className="p-3 d-flex flex-column align-items-center">
                <h5 className="card-title" style={{ fontSize: '3vmin' }}>{name || 'Sin nombre'}</h5>
                <h6 className="card-subtitle text-muted" style={{ fontSize: '3vmin' }}>S/. {price || '0.00'}</h6>
            </div>
        </div>
    )
}

export default DrinkCard;