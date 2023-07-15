import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="box">
      <canvas
        style="display: block; width: 100%; height: 100%;"
        data-engine="three.js r149"
        width="375"
        height="375"
      >
        <Spline scene="https://prod.spline.design/P70WuUKssfdSpvOK/scene.splinecode" />
      </canvas>
    </div>
  );
}
