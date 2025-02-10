import React from "react";
import { Link, useParams } from "react-router-dom";

export default function StagesPage() {
  const stageevents = [
    { stageid: "1", singer: "Coldplay", uid: "1" },
    { stageid: "1", singer: "Queen", uid: "2" },
    { stageid: "2", singer: "Maroon5", uid: "3" },
    { stageid: "2", singer: "Billie Eilish", uid: "4" },
    { stageid: "2", singer: "Beyonce", uid: "5" },
  ];

  const { stageId } = useParams(); // Get stage id from link

  // Get events that match the stage id
  const events = stageevents.filter((event) => stageId === event.stageid);

  return (
    <div className="stage-container">
      <h2>Events for Stage {stageId}</h2>
      <div className="event-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <Link to={`/project.festival/detailpage/${event.uid}`}>
              <h4>{event.singer}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
