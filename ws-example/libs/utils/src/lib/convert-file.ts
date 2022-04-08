const b64ToBlob = (b64: string, type = 'application/pdf'): Blob => {
  const byteCharacters = atob(b64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: type });
};

function blobToBase64(blob: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    return reader.readAsDataURL(blob);
  });
}

const fileToB64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result?.toString().replace(/^data:(.*,)?/, '');
      if (encoded!.length % 4 > 0 && !!encoded) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }
      if (encoded) {
        resolve(encoded);
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

const blobToFile = (blob: Blob, fileName?: string): File => {
  const b: any = blob;
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  b.lastModifiedDate = new Date();
  b.name = fileName || b.name;

  //Cast to a File() type
  return <File>blob;
};

const b64ToFile = (
  b64: string,
  nameFile: string,
  type = 'application/pdf'
): File => {
  return new File([b64ToBlob(b64)], nameFile, {
    type: type,
  });
};

export { b64ToBlob, blobToBase64, fileToB64, b64ToFile, blobToFile };
