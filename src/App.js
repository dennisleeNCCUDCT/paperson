import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="box"
        scene="https://prod.spline.design/P70WuUKssfdSpvOK/scene.splinecode"
      />
    </Wrapper>
  );
}

const aaaWrapper = styled.div`
width:100%;
height100%;
min-height:720px;`;
