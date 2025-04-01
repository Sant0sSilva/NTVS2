"use strict";

const Home = () => {
  const ogre = [
    {
      name: "Shrek",
      contactInfo: {
        email: "shrek@swampmail.com",
        phone: "+ 123 456 7890",
        location: "Shrek's Swamp, Far Far Away",
      },
      skills: [
        "Swamp Maintenance",
        "Ogre Roaring",
        "Onion Layer Analysis",
        "Donkey Management",
        "Dragon Communication",
      ],
      workExperience: [
        {
          job: "Swamp Owner",
          timePeriod: "Far Far Away | 2001 - Present",
          role: "Responsible for maintaining the swamp and keeping unwelcome guests away.",
        },
        {
          job: "Hero of Far Far Away",
          timePeriod: "Far Far Away | 2004 - Present",
          role: "Saved Princess Fiona, defeated Lord Farquaad, and rescued the kingdom from multiple threats.",
        },
      ],
      education: {
        degree: "Advanced Swampology",
        institution: "Ogre Academy, Far Far Away",
      },
    },
  ];

  function getOgre(name: string) {
    return ogre.find((d) => d.name === name);
  }

  const shrek = getOgre("Shrek");

  const { name, contactInfo, skills, workExperience, education } = shrek ?? {};

  return (
    <div className="m-1">
      {/* Header Section */}
      <header className="flex flex-col items-center bg-green-500 p-4 rounded-t-2xl text-white">
        <img
          src="\shrek.jpg"
          alt="Shrek image"
          className="border-3 border-white rounded-full"
        />
        <h1 className="font-bold text-3xl">{name}</h1>
        <p className="italic">Swamp Enthusiast | Ogre Extraordinaire</p>
      </header>

      {/*Contact Section */}
      <section>
        <h2 className="mt-4 rounded-md bg-[#ff5722] p-2 text-2xl font-semibold text-white">
          Contact Information
        </h2>
        <p>
          <strong>Email: </strong> {contactInfo?.email}
        </p>
        <p>
          <strong>Phone: </strong> {contactInfo?.phone}
        </p>
        <p>
          <strong>Location: </strong>
          {contactInfo?.location}
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="mt-4 rounded-md bg-[#ff5722] p-2 text-2xl font-semibold text-white">
          Skills
        </h2>
        <ul className="list-disc pl-6">
          <li>{skills?.[0]}</li>
          <li>{skills?.[1]}</li>
          <li>{skills?.[2]}</li>
          <li>{skills?.[3]}</li>
          <li>{skills?.[4]}</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="mt-4 rounded-md bg-[#ff5722] p-2 text-2xl font-semibold text-white">
          Work Experience
        </h2>
        <div>
          <h3 className="text-xl pb-2 font-medium">
            {workExperience?.[0].job}
          </h3>
          <p>{workExperience?.[0].timePeriod}</p>
          <p>{workExperience?.[0].role}</p>
        </div>

        <div>
          <h3 className="text-xl pb-2 font-medium">
            {workExperience?.[1].job}
          </h3>
          <p>{workExperience?.[1].timePeriod}</p>
          <p>{workExperience?.[1].role}</p>
        </div>
      </section>

      {/* education Section  */}
      <section>
        <h2 className="mt-4 rounded-md bg-[#ff5722] p-2 text-2xl font-semibold text-white">
          Education
        </h2>
        <p>
          <strong>Degree:</strong> {education?.degree}
        </p>
        <p>
          <strong>Institution:</strong> {education?.institution}
        </p>
      </section>

      {/* Footer */}
      <footer className="flex justify-center bg-[#ffeb3b] p-10 italic font-medium text-sm p-10 mt-4 rounded-b-2xl">
        <p>
          “Ogres are like onions. Onions have layers. Ogres have layers.” –
          Shrek
        </p>
      </footer>
    </div>
  );
};

export default Home;
