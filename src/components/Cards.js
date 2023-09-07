import Card from "./Card";
import React from "react";

function Cards(props) {

    const filteredData = props.data.filter((item) => {
        if(props.searchInput === '' && props.choice == null) return item;
        else{
            if(props.choice != null) return item.name.toLowerCase().includes(props.searchInput) && item.region.includes(props.choice.value);
            else return item.name.toLowerCase().includes(props.searchInput)
        }
    })

    const cards = filteredData.map(item => {
        return(         
            <Card 
                flag = {item.flags.svg}
                name = {item.name}
                population = {item.population}
                region = {item.region}
                capital = {item.capital}
            />   
        )
    });

    return(
        <div className="Cards container mb-5">
            <div className="row gy-5">
                {cards}
            </div>
            
        </div>
    )
}
export default Cards;