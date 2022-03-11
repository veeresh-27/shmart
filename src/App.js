import React ,{useState}from "react";
import Item from "./components/Item/Item";
import info from './components/info.json'
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";


import Pricingcards from "./components/Pricingcards/Pricingcards";

function App() {
    const [showItem, setShowItem] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(0);
    const onClickPriceCard = (newData) => {
        
        setShowItem(true);
        setDisplayIndex(newData.index);
    }
    const onClickNavTitile = () => {
        setShowItem(false);
    }
    
    return <div className="app">
        
        <Navbar onClickNavTitile={onClickNavTitile}/>
        {showItem?<><Item displayIndex={displayIndex}/></>:<Pricing onClickPriceCard={onClickPriceCard}/>}
    </div>;

}

export default App;