export const getTimezoneStateZone = (timezone) => {
  const stateMapArr = [
    ["GMT", "GMT"], // +00:00
    ["HST", "US/Hawaii"], // -10:00
    ["AKST", "US/Alaska"], // -09:00
    ["PST", "US/Pacific"], // -08:00
    ["MST", "US/Mountain"], // -07:00
    ["CST", "US/Central"], // -06:00
    ["EST", "US/Eastern"] // 05:00
  ]
  const stateMap = new Map(stateMapArr)
  return stateMap.get(timezone)
}
