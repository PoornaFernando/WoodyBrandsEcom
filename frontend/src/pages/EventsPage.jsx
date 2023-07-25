import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Loader from "../components/Layout/Loader";
import styles from "../styles/styles";

const EventsPage = () => {
  const [data, setData] = useState([]);
  const { allEvents, isLoading } = useSelector((state) => state.events);

  useEffect(() => {
    const d = allEvents;
    setData(d);

    window.scrollTo(0, 0);
  }, [allEvents]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <br />
          <br />
          <div className={`${styles.section}`}>
          {data &&
            data.map((i, index) => (
              <EventCard active={true} data={i} key={index} />
            ))}
          </div>
          <Footer />
        </div>
         
      )}
    </>
  );
};

export default EventsPage;
