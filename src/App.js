// import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <iframe
        className="box"
        title="frame"
        url="https://prod.spline.design/P70WuUKssfdSpvOK/scene.splinecode"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
width:100%;
height100%;
min-height:720px;`;
