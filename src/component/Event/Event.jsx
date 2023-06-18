import React from 'react';
import './Event.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Day1 from './pages/Day1';
import Day2 from './pages/Day2';
import Day3 from './pages/Day3';

function Event() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="leftContainer eventLeft">
        <ul className="eventNav">
          <li
            onClick={() => {
              navigate('/events/day1');
            }}
          >
            Day 1
          </li>
          <li
            onClick={() => {
              navigate('/events/day2');
            }}
          >
            Day 2
          </li>
          <li
            onClick={() => {
              navigate('/events/day3');
            }}
          >
            Day 3
          </li>
        </ul>
      </div>
      <div className="rightContainer">
        <Routes>
          <Route path="/" element={<Day1 />} />
          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/day3" element={<Day3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default Event;