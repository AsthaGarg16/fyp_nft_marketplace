import axios from "axios";
const sendFileToIPFS = async (fileImg) => {
  if (fileImg) {
    try {
      const formData = new FormData();
      formData.append("file", fileImg);

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
          pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      console.log(ImgHash);
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  }
};

const sendJSONtoIPFS = async (json) => {
  try {
    const resJSON = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
      data: json,
      headers: {
        pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
        pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
      },
    });

    console.log("final ", `ipfs://${resJSON.data.IpfsHash}`); // pass the winner
  } catch (error) {
    console.log("JSON to IPFS: ");
    console.log(error);
  }
};
