import React from "react";
import { Link, useParams } from "react-router-dom";

export default function StagesPage() {
  const stageevents = [
    {
      stageid: "1",
      singer: "Coldplay",
      uid: "1",
      image: "https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb",
    },
    {
      stageid: "1",
      singer: "Queen",
      uid: "2",
      image: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",
    },
    {
      stageid: "2",
      singer: "Maroon5",
      uid: "3",
      image:
        "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evNZY5NHq-default.jpg",
    },
    {
      stageid: "2",
      singer: "Billie Eilish",
      uid: "4",
      image: "https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e",
    },
    {
      stageid: "2",
      singer: "Beyonce",
      uid: "5",
      image: "https://i.scdn.co/image/ab67616d0000b273632e4eafb2ffba59a2ae4500",
    },
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
              <img
                src={event.image || "https://example.com/default-image.jpg"} // Use default image if none provided
                alt={event.singer}
                className="event-image"
              />
              <h4>{event.singer}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
