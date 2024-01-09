export enum RecurrencyEnum{
  EVERYDAY='EVERYDAY',
  INTWODAYS='INTWODAYS',
  WEEKLY='WEEKLY',
  MONTHLY='MONTHLY',
  PERSONALIZED='PERSONALIZED'

}

export const RecurrencyMapping:Record<RecurrencyEnum, string>= {
  [RecurrencyEnum.EVERYDAY]:"EveryDay",
  [RecurrencyEnum.INTWODAYS]:"Every 2 Days",
  [RecurrencyEnum.WEEKLY]:"Weekly",
  [RecurrencyEnum.MONTHLY]:"Monthly",
  [RecurrencyEnum.PERSONALIZED]:"Personalized"


}
