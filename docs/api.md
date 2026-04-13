---
sidebar_position: 3
sidebar_label: API
---
# API

## What is it ?

API stands for Application Programming Interface.

> This is basically a service running in the background and waiting for you to ask anything that it is allowed/able to do.

Some functions have been created to help you act on your boiler without having to connect onto the boiler's interface. It can be really usefull for home automation processes for example.

## How to use it ?

You have to do a GET HTTP request with your [API Token](setup#about) and the API will return a JSON Response.

Here is how you should structure your request:

```bash
curl http://your_local_okovision_address/api.php?token=your_API_Token&type=admin&action=getFileFromChaudiere
```

Reply from the API :

```json
{
    "response": true,
    "listefiles": [
        {
        "file": "touch_20160108.csv",
        "url": "http://your_local_okovision_address/logfiles/pelletronic/touch_20160108.csv"
        },
        {
        "file": "touch_20160109.csv",
        "url": "http://your_local_okovision_address/logfiles/pelletronic/touch_20160109.csv"
        },
        {
        "file": "touch_20160110.csv",
        "url": "http://your_local_okovision_address/logfiles/pelletronic/touch_20160110.csv"
        },
        {
        "file": "touch_20160111.csv",
        "url": "http://your_local_okovision_address/logfiles/pelletronic/touch_20160111.csv"
        }
    ]
}
```