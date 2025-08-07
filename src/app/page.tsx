'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './globals.css';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import { FiMessageSquare, FiShoppingCart, FiFileText, FiActivity, FiBookOpen, FiBriefcase } from 'react-icons/fi';


export default function Home() {
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const router = useRouter();

  const trySearch = () => {
    if (location.trim() && specialty.trim()) {
      router.push(`/doctors?location=${location}&specialty=${specialty}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      trySearch();
    }
  };
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-8">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-center">
            Your Home For Health
          </h1>
          <p className="text-2xl text-gray-200 font-bold mb-6 text-center">
            Find And Book
          </p>

          <div className="bg-white rounded-lg flex flex-col md:flex-row shadow-lg p-2 gap-2">
            {/* Location Input with Icon */}
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg">
                <FiMapPin />
              </span>
              <input
                type="text"
                placeholder="Enter city e.g. Bangalore"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={trySearch}
                className="pl-10 pr-4 py-3 rounded border w-full text-black"
              />
            </div>

            {/* Specialty Input with Icon */}
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg">
                <FiSearch />
              </span>
              <input
                type="text"
                placeholder="Search doctors, clinics, hospitals..."
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={trySearch}
                className="pl-10 pr-4 py-3 rounded border w-full text-black"
              />
            </div>
          </div>

          <div className="c-popular-searches">
            <span data-qa-id="popular-searches">Popular searches:</span>
            <a data-qa-id="popular-search-item" href="/bangalore/dermatologist"
              className="c-popular-searches__item">Dermatologist</a><a data-qa-id="popular-search-item"
                href="/bangalore/pediatrician" className="c-popular-searches__item">Pediatrician</a><a
                  data-qa-id="popular-search-item" href="/bangalore/gynecologist-obstetrician"
                  className="c-popular-searches__item">Gynecologist/Obstetrician</a>
            <div className="u-d-inline"><span className="c-popular-searches"><span data-qa-id="others-speciality"
              className="c-popular-searches__item">Others</span><i className="icon-ic_down_cheveron"></i></span></div>
          </div>
          <div className="c-icon-list">
            <div className="c-icon-list__list_wrapper">
              <a className="c-icon" href="/consult">
                <FiMessageSquare className="w-5 h-5 icon" />
                <span>Consult with a doctor</span>
              </a>
              <a className="c-icon" href="/order">
                <FiShoppingCart className="w-5 h-5 icon" />
                <span>Order Medicines</span>
              </a>

              <a className="c-icon" href="https://drive.practo.com">
                <FiFileText className="w-5 h-5 icon" />
                <span>View medical records</span>
              </a>
              <a className="c-icon" href="/tests">
                <div className="tab-offer">
                  <FiActivity className="w-5 h-5 icon-1" />
                  <span className="c-offer-tag u-round-corner u-border-white u-t-bold u-t-white">New</span>
                  
                </div>
                <span>Book test</span>
              </a>
              <a className="c-icon" href="/healthfeed">
                <FiBookOpen className="w-5 h-5 icon" />
                <span>Read articles</span>
              </a>

              <a className="c-icon" href="/providers">
                <FiBriefcase className="w-5 h-5 icon" />
                <span>For healthcare providers</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
