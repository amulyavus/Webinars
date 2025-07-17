'use client';

import React, { useState } from 'react';

const webinars = [
  {
    id: 1,
    title: 'Nutrition Tips for Newborns',
    speaker: 'Dr. Sumitra Meena',
    date: '2025-06-12',
    description:
      'Learn essential nutrition tips to keep your newborn healthy and happy.',
  },
  {
    id: 2,
    title: 'Handling Sleep Regression',
    speaker: 'Dr. Ravi Kapoor',
    date: '2025-06-15',
    description:
      'Understand why babies experience sleep regression and how to manage it.',
  },
  {
    id: 3,
    title: 'Early Brain Development',
    speaker: 'Dr. Aarti Shah',
    date: '2025-06-20',
    description:
      'Explore ways to support your baby’s brain growth in the first year.',
  },
];

const WebinarsPage = () => {
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  const openModal = (webinar: any) => {
    setSelectedWebinar(webinar);
  };

  const closeModal = () => {
    setSelectedWebinar(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Upcoming Live Webinars
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {webinar.title}
              </h2>
              <p className="text-gray-600 mb-1">
                <strong>Speaker:</strong> {webinar.speaker}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Date:</strong>{' '}
                {new Date(webinar.date).toLocaleDateString()}
              </p>
              <button
                onClick={() => openModal(webinar)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedWebinar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedWebinar.title}
            </h2>
            <p className="mb-2 text-gray-800">
              <strong className="font-semibold">Speaker:</strong>{' '}
              {selectedWebinar.speaker}
            </p>
            <p className="mb-2 text-gray-800">
              <strong className="font-semibold">Date:</strong>{' '}
              {new Date(selectedWebinar.date).toLocaleDateString()}
            </p>
            <p className="mb-4 text-gray-800">{selectedWebinar.description}</p>
            <div className="text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default WebinarsPage;
