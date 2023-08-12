import { Location } from "./Location";
import { Price } from "./Price";
import { User } from "./User";

class Event{

    constructor(
        public title:string,
        public location:Location,
        public date:Date,
        public description:string,
        public coupons:string[],
        public city:string,
        public banner:string,
        public flyers: string[],
        public participants:User[],
        public price:Price[],
        
    ){

    }

}

export {Event}