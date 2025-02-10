import { useParams } from "react-router-dom";

export default function DetailPage() {
  const eventdetail = [
    { uid: "1", time: "Coldplay will play at 10 am" },
    { uid: "2", time: "Queen will play at 1 pm without Freddie, sorry!" },
  ];

  const { eventId } = useParams();
  const events = eventdetail.find((event) => event.uid === eventId);
  return (
    <div>
      <p>The artist will perfor: {event.time};</p>
    </div>
  );
}
