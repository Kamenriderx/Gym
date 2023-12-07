import { useState } from "react";
import Goal from "./Goal";
import ReactPlayer from "react-player";

const GoalList = (props) => {
  const [goalList, setGoalList] = useState(props.goalList);
  console.log(goalList);
  return (
    <div className="h-full bg-[#222]">
      <ul>
        {goalList.map((goal, index) => (
          <Goal key={index} {...goal} setGoalList={setGoalList} />
        ))}
      </ul>

      {goalList.length == 0 && (
        <div className="h-full bg-[#222]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=L1kn_0zO6VU&ab_channel=CarlosBelcast"
          ></ReactPlayer>
        </div>
      )}
    </div>
  );
};

export default GoalList;