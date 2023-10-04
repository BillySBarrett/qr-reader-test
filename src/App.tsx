import { useState } from "react";
import { QrReader } from "react-qr-reader";

const App = () => {
  const [data, setData] = useState("No result");

  return (
    <div style={{ width: "50vw" }}>
      <h1>QR Code Reader</h1>
      <QrReader constraints={{}} />
      <br />
      <p>data: {data}</p>
    </div>
  );
};

export default App;
