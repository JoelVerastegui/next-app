import Content from '../../components/Content';

const Product = ({myParams}) => {
    return(
        <Content>
            <div className="productContainer">
                <div className="productContent">
                    <div className="productName"></div>
                    <div className="productSku"></div>
                </div>
            </div>
        </Content>
    )
}

Product.getInitialProps = ({query}) => {
    return {myParams: query}
}

export default Product;