export function imgToBase64(img) {
  const file = img;
  let reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.error = () => reject("something went wrong");
  });
}

