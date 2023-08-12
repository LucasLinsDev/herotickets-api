import { Price } from "./Price";
import { User } from "./User";

class Event{

    constructor(
        public title:string,
        public location:Location,
        public date:Date,
        public descrition:string,
        public banner:string,
        public participants:User[],
        public prince:Price[],
    ){

    }

}

export {Event}