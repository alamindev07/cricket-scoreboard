// import { useState } from "react"

// export default function Batsman (){
//     const [runs, setRuns]= useState(0);
//     const [six, setSix] =useState(0);
//     const [four, setFour]=useState(0);

//     const handleSingle = ()=>{
//         const updatedRUns = runs +1;
//         setRuns(updatedRUns);
//     }

//     const handleFour =()=>{
//         const updatedRUns = runs +4;
//         setRuns(updatedRUns);
//         const updatedFour = four+1;
//         setFour(updatedFour)
//     }

//     const handleSix =()=>{
//         const updatedRUns = runs + 6;
//         setRuns(updatedRUns)
//         const updatedSixes = six +1;
//         setSix(updatedSixes);
//     }

//     const handleRunsOfBatsman1 = ()=>{

//     }

//     return(
//         <div>
//             <h3>Bangladeshi Players Run</h3>
//             <p> Total Runs: {runs}</p>
//             <p>Total six of this match:{six}</p>
//             <p>Total four of this match:{four}</p>
//             <p>Batsman one Total Runs:{runs}</p>
//             <button onClick={handleSingle}>Single</button> <br />
//             <button onClick={handleFour}>Four</button> <br />
//             <button onClick={handleSix}>Six</button>
//             <button>Batsman1</button>
//         </div>
//     )
// }

import "./Batsman.css";

import { useState } from "react";

export default function Batsman() {
  const [batsman1, setBatsman1] = useState({ runs: 0, fours: 0, sixes: 0 });
  const [batsman2, setBatsman2] = useState({ runs: 0, fours: 0, sixes: 0 });

  // Optional: Set who is currently on strike
  const [onStrike, setOnStrike] = useState("batsman1");

  const handleRun = (type) => {
    const updateStats = (batsman, runValue, isFour = false, isSix = false) => {
      return {
        runs: batsman.runs + runValue,
        fours: batsman.fours + (isFour ? 1 : 0),
        sixes: batsman.sixes + (isSix ? 1 : 0),
      };
    };

    const runValue = type === "single" ? 1 : type === "four" ? 4 : 6;
    const isFour = type === "four";
    const isSix = type === "six";

    if (onStrike === "batsman1") {
      setBatsman1((prev) => updateStats(prev, runValue, isFour, isSix));
    } else {
      setBatsman2((prev) => updateStats(prev, runValue, isFour, isSix));
    }

    // Change strike on odd runs (optional)
    if (runValue % 2 !== 0) {
      setOnStrike((prev) => (prev === "batsman1" ? "batsman2" : "batsman1"));
    }
  };

  const totalRuns = batsman1.runs + batsman2.runs;
  const totalFours = batsman1.fours + batsman2.fours;
  const totalSixes = batsman1.sixes + batsman2.sixes;

  return (
    <div>
      <div className="allBatsman">
        <div className="batsman">
          <h2>Total Runs of Bandladesh Team</h2>
          <p>Total Runs: {totalRuns}</p>
          <p>Total Fours: {totalFours}</p>
          <p>Total Sixes: {totalSixes}</p>
        </div>

        <div className="batsman">
          <h4>Batsman 1</h4>
          <p>Runs: {batsman1.runs}</p>
          <p>Fours: {batsman1.fours}</p>
          <p>Sixes: {batsman1.sixes}</p>

          <p>Batsman1 Total Runs: {batsman1.runs}</p>
        </div>

        <div className="batsman">
          <h4>Batsman 2</h4>
          <p>Runs: {batsman2.runs}</p>
          <p>Fours: {batsman2.fours}</p>
          <p>Sixes: {batsman2.sixes}</p>

          <p>Batsman2 Total Runs: {batsman2.runs}</p>
        </div>
      </div>
      <div className="batsman">
        <h3 className="onstrik">
          Currently on strike:{" "}
          <span
            className={
              onStrike === "batsman1" ? "onstrikBatsman1" : "onstrikBatsman2"
            }
          >
            {onStrike}
          </span>
        </h3>
      </div>{" "}
      <br />
      <div className="btnStyle">
        <button className="btn-style" onClick={() => handleRun("single")}>
          Single
        </button>
        <button className="btn-style" onClick={() => handleRun("four")}>
          Four
        </button>
        <button className="btn-style" onClick={() => handleRun("six")}>
          Six
        </button>
        <button
          className="btn-style2"
          onClick={() =>
            setOnStrike(onStrike === "batsman1" ? "batsman2" : "batsman1")
          }
        >
          Change Strike
        </button>
      </div>
    </div>
  );
}
