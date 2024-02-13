import { AppState } from "../AppState.js";
import { House } from "../models/Houses.js";
import { setHTML } from "../utils/Writer.js";


function _drawhouses() {
    const houses = AppState.houses

    let htmlString = ''
    houses.forEach(house => htmlString += house.HouseHTMLTemplate)
    setHTML('houseListings', htmlString)
}

export class HouseController {

}