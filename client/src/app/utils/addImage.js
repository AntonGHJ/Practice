export const GetFileUrls = async (files) => {
  const fileUrls = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const data = await file.arrayBuffer();
    const contentType = file.type;
    const image = new Image();
    image.src = URL.createObjectURL(new Blob([data], { type: contentType }));
    const imgDataUrl = await new Promise((resolve) => {
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        canvas.getContext("2d").drawImage(image, 0, 0);
        resolve(canvas.toDataURL(contentType));
      };
    });
    const imgData = imgDataUrl.replace(/^data:image\/\w+;base64,/, "");
    const fileUrl = `data:${contentType};base64,${imgData}`;
    fileUrls.push(fileUrl);
  }
  return fileUrls;
};