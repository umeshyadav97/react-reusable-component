## :Time Zone conversion

#### Core components of the drop down Component

- Core
  - [TimeConversion](/src/helpers/time-conversion/index.js)
  - [config](/src/helpers/time-conversion/timezoneConfig.js)

### Basic Setup

You can directly call the helper function with some necessary props

To Convert Local time to UTC Time

```jsx
convertLocalToUTC({
        date: "20-05-2020 10:12:44 PM",
        inputDateFormat: "DD-MM-YYYY hh:mm:ss A"
      })
```

To Convert UTC Time to Local Time

```jsx
convertUTCToLocal({ dateTimeStamp: new Date(),
 outputFormat: "hh:mm:ss"
  })

```
To Convert To Specific timezone

```jsx
convertToSpecificTimeZone({
        timeZone: "PST",
        date: "20-05-2020 10:12:44 PM",
        inputDateFormat: "DD-MM-YYYY hh:mm:ss A"
      })
```

#### **_Basic Props_**


_*Props For convertUTCToLocal*_

- date:-              Date we want to convert (eg: 20-05-2020 10:12:44 PM)
-inputDateFormat:-    Format of input date (eg:DD-MM-YYYY hh:mm:ss A)
-dateTimeStamp:-      If timestamp available we can pass timestamp otherwise date (eg: new Date())
-outputFormat:-       Format of output in which we want like we want in format HH:MM:SS A

_*Props For convertLocalToUTC*_

- date:-              Date we want to convert (eg: 20-05-2020 10:12:44 PM)
-inputDateFormat:-    Format of input date (eg:DD-MM-YYYY hh:mm:ss A)
-dateTimeStamp:-      If timestamp available we can pass timestamp otherwise date (eg: new Date())
-outputFormat:-       Format of output in which we want like we want in format HH:MM:SS A

_*Props For convertToSpecificTimeZone*_

- date:-              Date we want to convert (eg: 20-05-2020 10:12:44 PM)
-inputDateFormat:-    Format of input date (eg:DD-MM-YYYY hh:mm:ss A)
-dateTimeStamp:-      If timestamp available we can pass timestamp otherwise date (eg: new Date())
-outputFormat:-       Format of output in which we want like we want in format HH:MM:SS A
-timeZone:-           Timezone we want to convert (eg: EST)
