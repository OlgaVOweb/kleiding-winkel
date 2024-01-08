function Buttons({/*filteredKleiding,*/data, setKleiding}) {
    const filteredKleiding = (searchTerm) =>{
    const filteredResult = [];
    data.forEach((item) => {
        /*item.searchTerm.forEach(term => {*/
            if (
                (typeof item.searchTerm === 'string' && item.searchTerm ===searchTerm) ||
                (Array.isArray(item.searchTerm) && item.searchTerm.includes(searchTerm))
            )  {
                filteredResult.push(item);
            }
        });
        setKleiding(filteredResult);
    };

    return (<div className="cont">
        <button className='change' onClick={() => setKleiding(data)}>All</button>
        <button className="change" onClick={() => filteredKleiding("dress")}>Dresses</button>
        <button className="change" onClick={() => filteredKleiding("pants")}>Pants</button>
        <button className="change" onClick={() => filteredKleiding("skirt")}>Skirts</button>
        <button className="change" onClick={() => filteredKleiding("shoes")}>Shoes</button>
        <button className="change" onClick={() => filteredKleiding("shirt")}>Shirts</button>
    </div>
    )
}

export default Buttons;