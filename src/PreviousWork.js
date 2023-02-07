export default function PreviousWork() {
  const experience = (title, company, date, synopsis) => {
    return (
      <div className="workPreviousLayout">
        <h2>{title}</h2>
        <p>{company}</p>
        <p>{date}</p>
        <p>{synopsis}</p>
      </div>
    );
  };
  let first = experience(
    "Construction",
    "Scutts Renovations | Dulwich Fires and Stoves - London",
    "June 2019 Present",
    "Working to deadlines, learning on the job, problem solving, strong attention to detail, logical mind-set, organising projects, website design and management"
  );
  let second = experience(
    "Presiding Officer",
    "Medway Council - London",
    "May 2019 Present",
    "Supervising polling stations and staff, ensuring secrecy of elections and accuracy of ballot paper account, data entry, liaison with voters, the council and local police"
  );
  let third = experience(
    "Stock Manager",
    "One Circle - London",
    "July 2019- July 2020",
    "Supervising Stock at various festivals, data entry, strong organisational awareness, working under pressure, Problem Solving, Professionalism "
  );
  let fourth = experience(
    "Hospitality (Japan) ",
    "Kabuki 1-2 - Niseko",
    "December 2018 April 2019",
    "Hospitality coordinator within a high level resort, Responsible for cashing up at end of day, Experience working in a culturally diverse environment, focus on handling the needs of clients  "
  );
  let fifth = experience(
    "Supervisor    ",
    "The Hare and Billet – London",
    "January 2018 to May 2018",
    "Looking after clients, managing a team, dealing with complaints, sorting out bookings, cashing up at end of day, relaying and building a rapport with head office "
  );
  let sixth = experience(
    "Waiting and Bartending    ",
    `The Station – London | \n The Pelton arms – London | 
\n   Lucky Beach – Brighton 
`,
    "December 2016 - January 2018",
    "Managing bookings, dealing with clients’ needs and problems, working under pressure in a busy venue, cashing up, organisation"
  );
  let seventh = experience(
    "Chef de Partie     ",
    "Grand Central - Brighton    ",
    "June 2015 to September 2016",
    "Looking after clients, managing a team, dealing with complaints, sorting out bookings, cashing up at end of day, relaying and building a rapport with head office "
  );

  return (
    <div>
      <div classname="workContainer">
        <h1 className="P1">Previous Work</h1>
        <div className="P2">{first}</div>
        <div className="P3">{second}</div>
        <div className="P4">{third}</div>
        <div className="P5">{fourth}</div>
        <div className="P6">{fifth}</div>
        <div className="P7">{sixth}</div>
        <div className="P8">{seventh}</div>
      </div>
    </div>
  );
}
