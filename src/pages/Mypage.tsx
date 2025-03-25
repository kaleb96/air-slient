function Mypage({ props }) {
  const modalEffect = props !== "" ? true : false;

  return (
    <div
      style={{
        backgroundColor: modalEffect ? "grey" : "",
        height: modalEffect ? "100vh" : "",
        opacity: modalEffect ? "0.9" : "",
      }}
    >
      Mypage
    </div>
  );
}

export default Mypage;
