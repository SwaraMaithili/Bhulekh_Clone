import React, { useState, useEffect } from "react";

export default function SearchForm() {
  const [data, setData] = useState({});
  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);
  const [villages, setVillages] = useState([]);

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTaluka, setSelectedTaluka] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  // Load JSON on component mount
  useEffect(() => {
    fetch("/data/output.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setDistricts(json.district_menu);
      });
  }, []);

  // Update talukas when district changes
  useEffect(() => {
    if (selectedDistrict) {
      setTalukas(data.taluka_menu[selectedDistrict] || []);
    } else {
      setTalukas([]);
    }
    setSelectedTaluka("");
    setVillages([]);
    setSelectedVillage("");
  }, [selectedDistrict, data]);

  // Update villages when taluka changes
  useEffect(() => {
    if (selectedTaluka) {
      setVillages(data.village_menu[selectedTaluka] || []);
    } else {
      setVillages([]);
    }
    setSelectedVillage("");
  }, [selectedTaluka, data]);

  return (
    <div className="row">
      <div className="col-md-4">
        <label>District</label>
        <select
          className="form-control"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option value="">--Select District--</option>
          {districts.map((d) => (
            <option key={d.backend_value} value={d.backend_value}>
              {d.display}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-4">
        <label>Taluka</label>
        <select
          className="form-control"
          value={selectedTaluka}
          onChange={(e) => setSelectedTaluka(e.target.value)}
        >
          <option value="">--Select Taluka--</option>
          {talukas.map((t) => (
            <option key={t.backend_value} value={t.backend_value}>
              {t.display}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-4">
        <label>Village</label>
        <select
          className="form-control"
          value={selectedVillage}
          onChange={(e) => setSelectedVillage(e.target.value)}
        >
          <option value="">--Select Village--</option>
          {villages.map((v) => (
            <option key={v.backend_value} value={v.backend_value}>
              {v.display}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}