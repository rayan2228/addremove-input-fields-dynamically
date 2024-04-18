
# Add/Remove Input Fields Dynamically

The \"addremove-input-fields-dynamically\" npm package provides a simple and efficient solution for dynamically adding and removing input fields in web applications.Developers can integrate this package into their projects to enable users to add new input fields dynamically with a click of a button, as well as remove existing input fields as needed.


## Demo

[DEMO](https://stackblitz.com/edit/vitejs-vite-3kfukr?file=src%2FApp.tsx) 


## Installation

Install my-project with npm

```bash
npm i addremove-input-fields-dynamically
```
    
## Usage/Examples DynamicInput

```javascript
import { DynamicInput } from "addremove-input-fields-dynamically";
import { useState } from "react";
import "addremove-input-fields-dynamically/dist/index.css";
import cancelIconSvg from "addremove-input-fields-dynamically/dist/icons/cancel.svg";
import addIconSvg from "addremove-input-fields-dynamically/dist/icons/add.svg";

function App() {
  const [inputOptions, setInputOptions] = useState([]);
  return (
    <DynamicInput
      inputOptions={inputOptions}
      setInputOptions={setInputOptions}
      cancelIcon={cancelIconSvg}
      buttonIconBefore={addIconSvg}
    />
  );
}

export default App;
```




## Usage/Examples DynamicDoubleInput

```javascript
import { DynamicDoubleInput } from "addremove-input-fields-dynamically";
import { useState } from "react";
import "addremove-input-fields-dynamically/dist/index.css";
import cancelIconSvg from "addremove-input-fields-dynamically/dist/icons/cancel.svg";
import addIconSvg from "addremove-input-fields-dynamically/dist/icons/add.svg";

function App() {
  const [inputOptions, setInputOptions] = useState([
    { id: 1, value1: "", value2: "" },
  ]);
  return (
    <DynamicDoubleInput
      inputOptions={inputOptions}
      setInputOptions={setInputOptions}
      cancelIcon={cancelIconSvg}
      buttonIconBefore={addIconSvg}
    />
  );
}

export default App;
```



## Package Customization

| Property name| Type | Default | Description |
 ----------------- | ------------------------------------------------------------------ | ------------------ | --------------------------------|
| inputOptions | variable | inputOptions | pass useState variable
| setInputOptions | function | setInputOptions | pass useState state update function
| inputAttributes | object | empty object | input attributes with key pair value. example {readonly:"readonly"}
| buttonAttributes | object | empty object | input attributes with key pair value. example {diabaled:"disabled"}
| length | number | 0 | how many options can added
| containerClassName | string | null | add your own css
| itemClassName | string | null | add your own css
| inputClassName | string | null | add your own css
| cancelClassName | string | null | add your own css
| buttonClassName | string | null | add your own css
| buttonErrorClassName | string | null | add your own css
| buttonText | string | add | add your own button text
| cancelIcon | image file | svg | add your own icon
| buttonIconBefore | image file | svg | add your own icon
| buttonIconAfter | image file | svg | add your own icon

# Hi, I'm Rayan Hossain! 👋


## 🚀 About Me
Passionate MERN Stack Developer || Building Innovative Web Solutions with MongoDB || Express JS || React JS || Next JS || Node.js || Mentor


## 🔗 Links
[![github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/rayan2228)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rayan2228/)



## License

This software is free to use under the MIT license. See the  [LICENSE file](https://choosealicense.com/licenses/mit/) for license text and copyright information.


