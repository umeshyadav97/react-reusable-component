## Notification Handler

#### Core components

- Core
  - [NotificationHandler](/src/components/NotificationHandler/index.jsx)
  - [Controller](/src/components/NotificationHandler/notification.controller.js)
  - [Switch](/src/components/NotificationHandler/Switch.jsx)

### Basic Setup

There is One main Component

1. NotificationHandler :- It is a main component with some props

## Step :- 1 [NotificationHandler](/src/components/NotificationHandler/index.jsx)

```jsx
<NotificationHandler
  header={["Settings", "In App Notification", "Email Notification"]}
  buttonData={[
    {
      title: "Notification when login",
      handleButton1: (e) => {
        console.log("Notification when login", e.target.checked)
      },
      handleButton2: (e) => {
        console.log("Notification when login", e.target.checked)
      }
    },
    {
      title: "Notification when logout",
      handleButton1: (e) => {
        console.log("Notification when logout", e.target.checked)
      },
      handleButton2: (e) => {
        console.log("Notification when logout", e.target.checked)
      }
    },
    {
      title: "Trial Notification login",
      handleButton1: (e) => {
        console.log("Trial Notification login", e.target.checked)
      },
      handleButton2: (e) => {
        console.log("Trial Notification login", e.target.checked)
      }
    }
  ]}
/>
```

here two props are needed by RABC Wrapper

**1. header (Required) : - This is a Array of strings this array will contain header name**

```json

header={["Settings", "In App Notification", "Email Notification"]}

```

**2. buttonData (Required) : - It is a Array of Object with some keys mention below.**

In this array of object the object will contain title,handleButton1 and handleButton2 as a keys
to manage the buttons trigger and title for which buttons are prasent.

```json
  buttonData={[
    {
      title: "Notification when login",
      handleButton1: (e) => {
        console.log("Notification when login", e.target.checked)
      },
      handleButton2: (e) => {
        console.log("Notification when login", e.target.checked)
      }
    },
    {
      title: "Notification when logout",
      handleButton1: (e) => {
        console.log("Notification when logout", e.target.checked)
      },
      handleButton2: (e) => {
        console.log("Notification when logout", e.target.checked)
      }
    },
    {
      title: "Trial Notification login",
      handleButton1: (e) => {
        console.log("Trial Notification login", e.target.checked)
      },
      handleButton2: (e) => {
        console.log("Trial Notification login", e.target.checked)
      }
    }
  ]}
```
