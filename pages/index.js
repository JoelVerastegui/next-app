import Content from '../components/Content';
import DrinkCard from '../components/DrinkCard';

import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    // const dispatch = useDispatch();
    const drinks = useSelector(store => store.drinks.drinks);

    return(
        <Content>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center align-items-start parallax" style={{ position: 'relative', backgroundImage: 'url("https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drinks-bg.jpg")' }}>
                    <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ height: '90vh', backgroundColor: '#00000080' }}>
                        <h1 className="text-white text-center" style={{ fontSize: '7vmin' }}>¡Tenemos la que buscas!</h1>
                        <h4 className="text-white text-center" style={{ fontSize: '3.8vmin' }}>Las mejores bebidas al mejor precio en un solo lugar!</h4>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <div className="drinkGridContainer">
                        <h1 className="titulo">Bebidas</h1>
                        <div className="drinkGrid">
                            {
                                drinks.length !== 0 && drinks.map((f,i) => (
                                    <div key={i} style={{ maxWidth: '18.125rem', minWidth: '18.125rem' }}>
                                        <DrinkCard img={f.img} name={f.name} price={f.price.toFixed(2)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        </Content>
    )
}

export default Index;