
import{ Child } from "./Child";
import { Address } from "../models/address";
export class User{

    firstname:String;
    lastname:String;
    email:String;
    password:String;
    dob:String;
    phoneno=String;
    height:String;
    weight:String;
    gender:String;
    child:Child;
    address:Address;
}