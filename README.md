# Img To Base64encoded

This pakage helps you to convert your local images to base64 encoded string

## Getting started

### **Installation**
---
`npm i img-to-base64encoded`

### **Using it**
---
```
<!-- This is a React Example -->

import { imgToBase64 } from "img-to-base64encoded";

export default funtion Something(){

    const handleImgChange = async(e) =>{
        <!-- you could store your image to some variable if you want to  or
        directly pass the image to the "imgToBase64" function -->

        <!-- Always use "async await" while using "imgToBase64" -->

        <!-- Storing in a variable then passing it-->
        let image = e.target.files[0];
        let base64EncodedString = await imgToBase64(image);

        <!-- Directly passing it -->
        let base64EncodedString = await imgToBase64(e.target.files[0]);
    }
    return(
        <input onChange={handleImgChange} accept="image/*" type="file" />
    )
}

```


**Demo**
---
*[Click here for Demo](https://codesandbox.io/s/objective-chaplygin-kolm2?file=/src/App.js)*

