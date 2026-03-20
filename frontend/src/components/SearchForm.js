import React, { useEffect, useState } from 'react';
import axios from '../api'; // axios instance pointing to Django backend

export default function SearchForm() {
  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);
  const [villages, setVillages] = useState([]);

  const [district, setDistrict] = useState('');
  const [taluka, setTaluka] = useState('');
  const [village, setVillage] = useState('');

  // Load districts
  useEffect(() => {
    axios.get('/districts/').then(res => setDistricts(res.data));
  }, []);

  // Load talukas when district changes
  useEffect(() => {
    if (district) {
      axios.get(`/talukas/${district}/`).then(res => setTalukas(res.data));
    } else {
      setTalukas([]);
    }
    setTaluka('');
    setVillages([]);
    setVillage('');
  }, [district]);

  // Load villages when taluka changes
  useEffect(() => {
    if (taluka) {
      axios.get(`/villages/${taluka}/`).then(res => setVillages(res.data));
    } else {
      setVillages([]);
    }
    setVillage('');
  }, [taluka]);

  return (
    <form>
      <div>
        <label>जिल्हा (District)</label>
        <select value={district} onChange={e => setDistrict(e.target.value)}>
          <option value="">--निवडा--</option>
          {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
      </div>

      <div>
        <label>तालुका (Taluka)</label>
        <select value={taluka} onChange={e => setTaluka(e.target.value)}>
          <option value="">--निवडा--</option>
          {talukas.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
      </div>

      <div>
        <label>गाव (Village)</label>
        <select value={village} onChange={e => setVillage(e.target.value)}>
          <option value="">--निवडा--</option>
          {villages.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
        </select>
      </div>
    </form>
  );
}