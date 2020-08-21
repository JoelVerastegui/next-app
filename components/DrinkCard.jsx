import Svg from './Svg';

const DrinkCard = ({img, name, price}) => {
    return(
        <div className="card drinkCard rounded shadow d-flex flex-column align-items-center">
            {img && <img className="card-img-top" src={img || "drink-1.png"} style={{ width: 'auto', height: '40vmin' }} alt="drinkImg"/>}
            {!img && <div className="d-flex justify-content-center align-items-center" style={{ height: '40vmin' }}><Svg img="notImage" /></div>}
            <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '3vmin' }}>{name || 'Sin nombre'}</h5>
                <h6 className="card-subtitle text-muted" style={{ fontSize: '3vmin' }}>S/. {price | '0.00'}</h6>
            </div>
        </div>
    )
}

export default DrinkCard;