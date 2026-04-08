---
sidebar_position: 2
sidebar_label: Boiler Connection
---
# Boiler Setup
 
## Network connection
 
Connect your boiler to your local network (network card located in the boiler door).
 
![Network card](https://github.com/Domotrique/okovision_2023/assets/148430940/bbd273f4-d8ef-453b-9be8-d5895ee06e49)
 
## Find the IP address
 
Go to **Main Menu → General → IP Config** to find your boiler's IP address.
 
> 💡 **Tip**: assign a static IP to your boiler in your router settings to prevent the address from changing.
 
![IP Config](https://github.com/Domotrique/okovision_2023/assets/148430940/9f51dd77-7566-4a95-b899-fa7010410d5b)
 
You can also check or retrieve your Okofen app credentials (for remote access) from this same menu.
 
## Check HTTP access
 
Open a browser and navigate to:
 
```
http://YOUR_BOILER_IP/logfiles/pelletronic/
```
 
You should see something like this:
 
![Logfiles page](https://github.com/Domotrique/okovision_2023/assets/148430940/3b6a26d9-4499-43f6-8505-53ded15d6c5b)
 
If this page loads, **the hardest part is done!** 🎉
 
<img src="https://user-images.githubusercontent.com/148430940/276651209-10c7936f-aa83-47ab-a2ec-c3e727c193df.jpg" width="400" alt="Okofen Pellematic Compact"></img>
 
---
 
## OkoVision Setup
 
Open your browser and go to [http://localhost](http://localhost) (or your machine's IP address).