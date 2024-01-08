import { useState } from "react";
import { data } from "./data";
import Buttons from "./Button";
import Kleiding from "./Kleiding"

function Home() {

const [kleiding, setKleiding] = useState(data);
/*
const chosenKleiding = (searchTerm) => {
  const newKleiding = data.filter(element => element.searchTerm === searchTerm);
  setKleiding(newKleiding);
}
*/

return (
  <div>
    <div className='cont'>
      <h2 className='back'>Free standart shipping</h2>
    </div>
    <Buttons
    data={data}
    setKleiding={setKleiding}
    /*
     filteredKleiding={chosenKleiding} setKleiding={setKleiding}
     */
     />
    <Kleiding itemsForSale = {kleiding} />
  </div>
);
}

export default Home;