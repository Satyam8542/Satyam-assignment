'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DoctorsList() {
  const searchParams = useSearchParams();
  const location = searchParams.get('location') || '';
  const specialty = searchParams.get('specialty') || '';
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (location && specialty) {
      axios
        .get(`/api/doctors?location=${location}&specialty=${specialty}`)
        .then((res) => setDoctors(res.data));
    }
  }, [location, specialty]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{doctors.length} Dermatologists available in {location}</h2>
      <div className="grid gap-6">
        {doctors.map((doc: any) => (
          <div key={doc._id} className="border p-4 rounded shadow-md flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-bold">{doc.name}</h3>
              <p>{doc.specialty}</p>
              <p>{doc.experience} years experience</p>
              <p>{doc.area}</p>
              <p>₹{doc.fee} Consultation Fee</p>
              <p className="text-green-600 font-medium">{doc.availability}</p>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Clinic Visit</button>
              <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded">Contact Clinic</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}