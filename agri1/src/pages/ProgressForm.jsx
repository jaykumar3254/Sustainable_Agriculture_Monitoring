import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

function ProgressForm() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [progress, setProgress] = useState({
    workout: false,
    diet: false,
    sleep: false,
    water: false,
  });
  const [note, setNote] = useState('');

  return (
    <div className="p-6 space-y-6">
      {/* Top section with calendar and checkboxes */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Calendar */}
        <div className="w-full lg:w-1/2 border border-black p-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
          </LocalizationProvider>
        </div>

        {/* Checkboxes */}
        <div className="w-full lg:w-1/2 border border-black p-4 space-y-4">
          <h2 className="text-lg font-semibold">Daily Progress Checklist</h2>
          {Object.entries(progress).map(([key, value]) => (
            <div key={key} className="flex items-center gap-3">
              <input
                type="checkbox"
                id={key}
                checked={value}
                onChange={() => setProgress({ ...progress, [key]: !value })}
                className="w-4 h-4"
              />
              <label htmlFor={key} className="capitalize">{key}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom note section */}
      <div className="border border-black p-4">
        <textarea
          className="w-full h-32 p-3 border rounded resize-none"
          placeholder="Add your notes here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ProgressForm;
