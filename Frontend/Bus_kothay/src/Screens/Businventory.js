import React from "react"
import Inventory from "../components/Businventory/inventory"
import Driver from "../components/Deiver_info/Driver"

function Businventory() {
    return(
        <div className="container" style={{marginBottom:"10%"}}>
            <Inventory/><br/>
            <Driver/>
        </div>
    )
}
export default Businventory