import Content from '../components/Content';
import DrinkCard from '../components/DrinkCard';

const Index = () => {
    return(
        <Content>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center align-items-start parallax" style={{ position: 'relative', backgroundImage: 'url("drinks-bg.jpg")' }}>
                    <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ height: '90vh', backgroundColor: '#00000080' }}>
                        <h1 className="text-white text-center" style={{ fontSize: '7vmin' }}>¡Tenemos la que buscas!</h1>
                        <h4 className="text-white text-center" style={{ fontSize: '3.8vmin' }}>Las mejores bebidas al mejor precio en un solo lugar</h4>
                    </div>
                </div>
                <div className="m-5">
                    <h1 className="titulo">Bebidas</h1>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-3 p-4" style={{ maxWidth: '18.125rem', minWidth: '18.125rem' }}>
                            <DrinkCard img="drink-1.png" name="Jameson" price="170.00" />
                        </div>
                        <div className="col-md-3 p-4" style={{ maxWidth: '18.125rem', minWidth: '18.125rem' }}>
                            <DrinkCard name="Cartavio" price="170.52" />
                        </div>
                        <div className="col-md-3 p-4" style={{ maxWidth: '18.125rem', minWidth: '18.125rem' }}>
                            <DrinkCard name="Bebida 1" price="170.00" />
                        </div>
                        <div className="col-md-3 p-4" style={{ maxWidth: '18.125rem', minWidth: '18.125rem' }}>
                            <DrinkCard name="Bebida 2" price="170.00" />
                        </div>
                        <div className="col-md-3 p-4" style={{ maxWidth: '18.125rem', minWidth: '18.125rem' }}>
                            <DrinkCard img="drink-1.png" name="Jameson" price="170.00" />
                        </div>
                        <div className="col-md-3 p-4" style={{ maxWidth: '18.125rem', minWidth: '18.125rem' }}>
                            <DrinkCard name="Cartavio" price="170.52" />
                        </div>
                        <div className="col-md-3 p-4" style={{ maxWidth: '18.125rem', minWidth: '18.125rem' }}>
                            <DrinkCard name="Bebida 1" price="170.00" />
                        </div>
                        <div className="col-md-3 p-4" style={{ maxWidth: '18.125rem', minWidth: '18.125rem' }}>
                            <DrinkCard name="Bebida 2" price="170.00" />
                        </div>
                    </div>
                    <div className="row">
                        
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default Index;