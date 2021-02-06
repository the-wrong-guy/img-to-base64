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


## **License-MIT**
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
