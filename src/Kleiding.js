import { Link } from "react-router-dom";

function Kleiding({itemsForSale}) {
    return (<div className="products">
        {itemsForSale.map((item => {
            const {id, name, searchTerm, price, image} = item;
            return(
                <div className="product-card" key={id} >
                    <Link to={`/about/${item.title}`}>
                        <img src={image} width="400px" height="500px" alt="kleiding"/>
                    </Link>
                    <div className="product-info">
                        <h3>{name}</h3>
                        <h4>$ {price}</h4>
                    </div>
                </div>
            )
        }))}
    </div>)
}

export default Kleiding;