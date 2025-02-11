import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function StagesPage() {
  const stageevents = [
    {
      stageid: "1",
      singer: "Coldplay",
      uid: "1",
      image: "https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb",
      category: "pop",
    },
    {
      stageid: "1",
      singer: "Queen",
      uid: "2",
      image: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",
      category: "rock",
    },
    {
      stageid: "2",
      singer: "Maroon5",
      uid: "3",
      image:
        "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evNZY5NHq-default.jpg",
      category: "indie",
    },
    {
      stageid: "2",
      singer: "Billie Eilish",
      uid: "4",
      image: "https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e",
      category: "pop",
    },
    {
      stageid: "2",
      singer: "Beyonce",
      uid: "5",
      image: "https://i.scdn.co/image/ab67616d0000b273632e4eafb2ffba59a2ae4500",
      category: "pop",
    },
    {
      stageid: "2",
      singer: "Toto",
      uid: "6",
      image: "https://i.scdn.co/image/ab67616d0000b2730463eac306bfb118122cf558",
      category: "rock",
    },
    {
      stageid: "1",
      singer: "MAYOROVA",
      uid: "7",
      image: "https://i.scdn.co/image/ab6761610000e5ebb2951e1ff158170bfdc84045",
      category: "pop",
    },
    {
      stageid: "1",
      singer: "Dorofeeva",
      uid: "8",
      image: "https://i.scdn.co/image/ab67616d0000b27357887c0cde4c4c9996e2c169",
      category: "pop",
    },
    {
      stageid: "2",
      singer: "Imagine Dragons",
      uid: "9",
      image: "https://i.scdn.co/image/ab6761610000e5ebab47d8dae2b24f5afe7f9d38",
      category: "indie",
    },
    {
      stageid: "1",
      singer: "Ed Sheeran",
      uid: "10",
      image: "https://i.scdn.co/image/ab6761610000e5eb784daff754ecfe0464ddbeb9",
      category: "pop",
    },
  ];

  const { stageId } = useParams(); // Get stage id from link
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get events that match the stage id
  const events = stageevents.filter((event) => stageId === event.stageid);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.singer
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="stage-container">
      <div className="search-filter-container">
        <p>Search by artist:</p>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for artist"
        />
        <p>Filter by category:</p>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="indie">Indie</option>
        </select>
      </div>
      <h2>Events for Stage {stageId}</h2>
      <div className="event-grid">
        {filteredEvents.map((event, index) => (
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
