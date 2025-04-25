import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import ProgressForm from './ProgressForm';

const Progress = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [checkboxes, setCheckboxes] = useState({
    irrigation: false,
    culturalPractices: false,
    biologicalControls: false,
    chemicalTreatments: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="min-h-screen p-6 bg-black">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Full Size Calendar */}
        <div className="w-full md:w-1/2 border-2 border-green-500 rounded-md p-4 bg-black text-white">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              sx={{
                backgroundColor: 'black',
                color: 'white',
                '& .MuiPickersDay-dayWithMargin': {
                  color: 'white',
                },
                '& .Mui-selected': {
                  backgroundColor: '#22c55e', // Tailwind green-500
                },
              }}
            />
          </LocalizationProvider>
        </div>

        {/* 4 Checkboxes with Labels */}
        <div className="w-full md:w-1/2 border-2 border-green-500 rounded-md p-4 bg-black text-white">
          <h2 className="text-xl font-semibold mb-4 text-green-400">Daily Progress</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="irrigation"
                checked={checkboxes.irrigation}
                onChange={handleCheckboxChange}
                className="accent-green-500 w-5 h-5"
              />
              <label htmlFor="irrigation" className="text-white">Irrigation</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="culturalPractices"
                checked={checkboxes.culturalPractices}
                onChange={handleCheckboxChange}
                className="accent-green-500 w-5 h-5"
              />
              <label htmlFor="culturalPractices" className="text-white">Cultural Practices</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="biologicalControls"
                checked={checkboxes.biologicalControls}
                onChange={handleCheckboxChange}
                className="accent-green-500 w-5 h-5"
              />
              <label htmlFor="biologicalControls" className="text-white">Biological Controls</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="chemicalTreatments"
                checked={checkboxes.chemicalTreatments}
                onChange={handleCheckboxChange}
                className="accent-green-500 w-5 h-5"
              />
              <label htmlFor="chemicalTreatments" className="text-white">Chemical Treatments</label>
            </div>
          </div>
        </div>
      </div>

      {/* Large Notes Box */}
      <div className="border-2 border-green-500 rounded-md p-4 bg-black text-white">
        <textarea
          className="w-full h-40 p-3 bg-black border border-green-500 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Write your notes or progress summary for the selected day..."
        />
      </div>
    </div>
  );
};

export default Progress;
