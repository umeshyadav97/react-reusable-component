import moment from "moment-timezone"
import { getTimezoneStateZone } from "./timezoneConfig"

//******* this function is used to convert date and time to specific time zone like PST,HST etc
//*******  input should be a timestamp with timezone and ouytput format
/**
 *
 * @param {String} date Date we want to convert (eg: 20-05-2020 10:12:44 PM)
 * @param {String} inputDateFormat Format of input date (eg:DD-MM-YYYY hh:mm:ss A)
 * @param {String} timeZone  Timezone we want to convert (eg: EST)
 * @param {Date} dateTimeStamp If timestamp available we can pass timestamp otherwise date (eg: new Date())
 * @param {String} outputFormat Format of output in which we want like we want in format HH:MM:SS A
 * @returns {String}
 */
export const convertToSpecificTimeZone = ({
  timeZone,
  dateTimeStamp = null,
  date,
  inputDateFormat = null,
  outputFormat = "YYYY-MM-DD hh:mm:ss A"
}) => {
  const timeZoneState = getTimezoneStateZone(timeZone)
  if (dateTimeStamp) {
    //if local timestamp is passed as parameter
    return moment(dateTimeStamp).tz(timeZoneState).format(outputFormat)
  } else {
    return moment(date, inputDateFormat).tz(timeZoneState).format(outputFormat)
  }
}

//******** to convert Local  date and time to UTC format
/**
 *
 * @param {String} date Date we want to convert (eg: 20-05-2020 10:12:44 PM)
 * @param {String} inputDateFormat Format of input date (eg:DD-MM-YYYY hh:mm:ss A)
 * @param {Date} dateTimeStamp If timestamp available we can pass timestamp otherwise date (eg: new Date())
 * @param {String} outputFormat Format of output in which we want like we want in format HH:MM:SS A
 * @returns {String}
 */
export const convertLocalToUTC = ({
  date,
  inputDateFormat = null,
  dateTimeStamp = null,
  outputFormat = "YYYY-MM-DD hh:mm:ss A"
}) => {
  if (dateTimeStamp) {
    //if local timestamp is passed as parameter
    return moment(dateTimeStamp).utc().format(outputFormat)
  } else {
    return moment(date, inputDateFormat).utc().format(outputFormat)
  }
}

//********* to convert UTC date and time to local time format
/**
 *
 * @param {String} date Date we want to convert (eg: 20-05-2020 10:12:44 PM)
 * @param {String} inputDateFormat Format of input date (eg:DD-MM-YYYY hh:mm:ss A)
 * @param {Date} dateTimeStamp If timestamp available we can pass timestamp otherwise date (eg: new Date())
 * @param {String} outputFormat Format of output in which we want like we want in format HH:MM:SS A
 * @returns {String}
 */
export const convertUTCToLocal = ({
  date,
  inputDateFormat = null,
  dateTimeStamp = null,
  outputFormat = "YYYY-MM-DD hh:mm:ss A"
}) => {
  var toDt = ""

  if (dateTimeStamp) {
    //if local timestamp is passed as parameter
    toDt = moment.utc(dateTimeStamp).toDate()
  } else {
    toDt = moment.utc(date, inputDateFormat).toDate()
  }
  return moment(toDt).format(outputFormat)
}
