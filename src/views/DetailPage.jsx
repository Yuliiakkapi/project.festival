import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DetailPage() {
  const eventdetail = [
    {
      uid: "1",
      time: "Coldplay will play at 10 am",
      description: "Experience the magic of Coldplay live!",
      image: "https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb",
    },
    {
      uid: "2",
      time: "Queen will play at 1 pm without Freddie, sorry!",
      description: "Join Queen for an unforgettable night of rock.",
      image: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",
    },
    {
      uid: "3",
      time: "Maroon5 will play at 5 pm",
      description: "Enjoy yourself with magic of Maroon5",
      image:
        "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evNZY5NHq-default.jpg",
    },
  ];

  const { eventId } = useParams(); // Get event ID from the URL
  const event = eventdetail.find((event) => event.uid === eventId); // Find the event

  return (
    <div className="detail-container">
      {event ? (
        <>
          <img
            src={event.image}
            alt={event.description}
            className="detail-image"
          />
          <h2>{event.time}</h2>
          <p>{event.description}</p>
          <Link to="/project.festival/stagepage/1" className="back-button">
            Back to Events
          </Link>
        </>
      ) : (
        <p>Event not found.</p>
      )}
    </div>
  );
}
