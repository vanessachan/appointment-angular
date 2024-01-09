import {RecurrencyEnum} from "./RecurrencyEnum";

export class Appointment{
  id?:number;
  name:string="";
  description:string="";
  recurrency:RecurrencyEnum=RecurrencyEnum.EVERYDAY;
  time="";
  startDate="";
  stopDate="";

  recurrencyPersonalized?:number;

}
