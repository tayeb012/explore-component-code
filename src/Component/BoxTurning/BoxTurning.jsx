// import "./BoxTurning.css";
import "./BoxTurning2.css";

const BoxTurning = () => {
  return (
    <div className="h-screen bg-purple-900 flex justify-center items-center ">
      <div className="cube">
        <div className="top"></div>
        <div>
          <span className="--i:0"></span>
          <span className="--i:1"></span>
          <span className="--i:2"></span>
          <span className="--i:3"></span>
        </div>
      </div>
    </div>
  );
};

export default BoxTurning;
