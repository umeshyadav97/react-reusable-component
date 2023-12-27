APPTable is created to simplify the use of table with common layout across the app.

### step1

figure out the type of table.
If its view only table, All you need to do is,
Call App table in your component and provide the required data

```js
import AppTable from "components/Loader/AppTable"
;<AppTable
  headers={headers}
  keys={headers}
  data={data}
  rowsPerPageOptions={rowsPerPageOptions}
  ReadOnly={true}
/>
```

If the table is read only keep the ReadOnly key true.
Provide key and headers along with Data so that you can show the data.

Make sure you only provide the keys you need to showcase, A dummy function is
already written to understand the possible cases of data manipulation. However you can
always add your own according to case.

> > > Edge case I
> > > if data is in object and you need only one or two keys from them

> > > Edge case II

if You need to remove one key entirely.

```js
//To remove a key that is not required in the table

var newObj = Object.assign({}, resp?.data?.resp[0])
delete newObj.address

// change value of key to string whose value is in object.

resp?.data?.resp.forEach(function (item) {
  if (typeof item.company === "object") {
    item.company = item.company.name
  }
})
setHeaders(Object.keys(newObj))
```

There might be othere possible cases that can happen and you need to
manipulate data before sending it in AppTable.
Make sure only those keys are going into key which are required in Table UI

### Step 2

You may need to perform some action in the table,
you might have to call custom functions accordingly.

For this dynamic table such data will follow a specific structure to
be maintained.

> > > Example Schema

```js
{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952",
    "status": [
        {
        "value": "Inactive",
        "type": "button",
        "color": "#d6cbd3"
        },
        {
         "value": "Block",
         "type": "button",
         "color": "#c94c4c"
        },
        {
        "value": "Active",
        "type": "button",
        "color": "#b5e7a0"
        }
        ]
    },
```

You can connect with Backend or you can manipulate the data accordingly,
the key value is going to be an ARRAY. and it should have these values and action name and type,
color or buttons as mandatory one.

Table will automaticly take care of ui and confirmation popup after receiving these data.

in that case you will call App table as

```js
<AppTable
    headers={headers}
    keys={headers}
    data={data}
    rowsPerPageOptions={rowsPerPageOptions}
    ReadOnly={false}
    ActionKey="status"
    ActionArray={true}
    handleAction={() => handleTableAction()}
/>
```
Here Read only will be false and you need to pass handleAction to perform the desired operation.

In the App table.
sorting and Search is defined.
You need not worry for buttons ui and scrollable cases.
You can always customize the Apptable according to your project requirement.

