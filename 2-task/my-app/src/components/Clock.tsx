import * as React from "react";
import { useState } from "react";
import { Temporal } from "@js-temporal/polyfill";

import "../styles/App.css";
import "../styles/Clock.css";

export default function Clock() {
  const [selectedClient, setSelectedClient] = useState("Europe/Chisinau");

  const [currentTime, setCurrentTime] = useState("");

  function handleSelectChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setSelectedClient(event.target.value);
  }
  React.useEffect(() => {
    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [selectedClient]);

  function updateTime() {
    let zonedtime = Temporal.Now.zonedDateTimeISO();
    let changeZone = zonedtime.withTimeZone(selectedClient);
    let time = changeZone.toPlainTime();
    setCurrentTime(time.round("second").toString());
  }

  return (
    <div className="Clock">
      <h1>{currentTime}</h1>

      <select
        name="pets"
        id="pet-select"
        value={selectedClient}
        onChange={handleSelectChange}
      >
        <option value="Europe/Chisinau">Europe/Chisinau</option>
        <option value="Europe/Paris">Europe/Paris</option>
        <option value="America/Los_Angeles">America/Los_Angeles</option>
        <option value="Asia/Singapore">Asia/Singapore</option>
        <option value="Asia/Tokyo">Asia/Tokyo</option>
        <option value="Asia/Kolkata">Asia/Kolkata</option>
      </select>
    </div>
  );
}
