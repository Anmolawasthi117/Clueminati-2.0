import React from 'react';

const AboutUs = () => {
  const organizers = [
    {
      name: 'Krishna Sharma',
      description: 'The mastermind behind event finances and registrations, ensuring everything is on track and running smoothly. Krishna’s attention to detail ensures that participants are seamlessly onboarded and all resources are well-managed.',
      instagram: 'https://www.instagram.com/krishna_sharma',
      photo: 'https://via.placeholder.com/150'
    },
    {
      name: 'Anmol Awasthi',
      description: 'Anmol is the brilliant creator of this website and the strategic mind behind the event routes. As the Path Manager, he designs each clue and route, ensuring that participants have an engaging and challenging journey.',
      instagram: 'https://www.instagram.com/anmol._7._',
      photo: 'https://avatars.githubusercontent.com/u/147149400?v=4'
    },
    {
      name: 'Arpit Koshta',
      description: 'Arpit is the energetic host of the event, guiding participants with enthusiasm and keeping the energy high. As a team manager, he ensures everything runs according to plan, motivating the team to deliver an unforgettable experience.',
      instagram: 'https://www.instagram.com/arpit_921',
      photo: 'https://doc-xify.vercel.app/assets/profile-Yf_PSAHN.jpg'
    },
    {
      name: 'Aryan Singh Thakur',
      description: 'Aryan adds the perfect mix of humor and charisma as the host of the event, making sure every participant is involved and engaged. As a team manager, he handles logistics and ensures the event’s smooth execution from start to finish.',
      instagram: 'https://www.instagram.com/a.r.y.a.n_10',
      photo: 'https://via.placeholder.com/150'
    },
    {
      name: 'Rishabh Agrawal',
      description: 'Rishabh brings his dynamic personality to the event, hosting with style and energy. As a team manager, he oversees the event\'s technical aspects, coordinating with different teams to ensure a flawless experience for everyone.',
      instagram: 'https://www.instagram.com/rishabhhunyrr',
      photo: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="p-6 max-w-lg mx-auto bg-black text-white rounded-lg shadow-lg h-[80vh] overflow-y-auto">
      <h3 className="text-3xl font-bold text-yellow-500 mb-6 text-center">About Us</h3>
      <p className="text-gray-300 text-center mb-6">
        Clueminaty is an exciting treasure hunt game where you solve riddles and follow clues to uncover a hidden treasure. Meet our dedicated organizers who bring this adventure to life!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {organizers.map((organizer, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <img
              src={organizer.photo}
              alt={organizer.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-yellow-500 mb-4"
            />
            <h4 className="text-lg font-bold text-yellow-500 text-center">{organizer.name}</h4>
            <p className="text-gray-300 text-sm text-center">{organizer.description}</p>
            <a
              href={organizer.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-600 text-sm mt-2"
            >
              @{organizer.instagram.split('www.instagram.com/').pop()}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
