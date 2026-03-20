// src/components/LandList.js
import React from 'react';

const LandList = ({ records }) => {
  return (
    <div>
      <h3>Search Results</h3>
      {records.length === 0 ? (
        <p>No records found.</p>
      ) : (
        records.map((record, index) => (
          <div key={index}>
            <p><strong>Land Name:</strong> {record.land_name}</p>
            <p><strong>Survey Number:</strong> {record.survey_number}</p>
            <p><strong>Owner:</strong> {record.owner_name}</p>
            <p><strong>Area:</strong> {record.area} sq.m</p>
            <p><strong>Location:</strong> {record.location}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default LandList;