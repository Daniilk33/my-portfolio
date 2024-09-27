/* 
  File Name: Project.js
  Student Name: Daniil Konishchev
  Student ID: 300735304
  Date: September 29, 2024
*/
import volunteerImage from '../assets/volunteer.jpg';
import eventImage from '../assets/event.png';  
import railwayImage from '../assets/railway.jpg';  

const Projects = () => {
  return (
    <div>
      <h1>My Future Projects</h1>

      <div className="projects-page">
        {/* Project 1 */}
        <section className="project" id="project-1">
          <h2>Project 1: Nonprofit Volunteer Management System</h2>
          <img src={volunteerImage} alt="Volunteer Management System" />
          <p>
            The goal of this project is to develop a Volunteer Management System for nonprofits to streamline the process of organizing volunteer activities. 
            The platform would allow nonprofit organizations to post volunteer opportunities, track volunteer hours, and manage schedules.
            I am specifically interested in designing the front-end in React and implementing the back-end with Node.js and MongoDB for data management.
          </p>
        </section>

        {/* Project 2 */}
        <section className="project" id="project-2">
          <h2>Project 2: Event Planning and Analytics Dashboard</h2>
          <img src={eventImage} alt="Event Planning Dashboard" />
          <p>
           Here the goal is to create an Event Planning and Analytics Dashboard for nonprofit organizations to manage large  events. 
            Built using React for the front end and integrated with Google Analytics for live tracking, the dashboard would allow users to monitor 
            registrations, track attendee engagement, and receive feedback.
          </p>
        </section>

        {/* Project 3 */}
        <section className="project" id="project-3">
          <h2>Project 3: Railway Safety Monitoring App</h2>
          <img src={railwayImage} alt="Railway Safety Monitoring App" />
          <p>
            Based of my experience in railway logistics, I am interested in developing a mobile app to monitor railway safety.
            The app would collect data from various monitoring devices installed on trains and tracks, analyzing this information to provide 
            predictive maintenance alerts and safety notifications.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Projects;


{/* Project 1 image source: https://bloomerang.co/blog/volunteer-management-software/ */}
{/* Project 2 image source: https://www.slideteam.net/flat-design-diagrams/event-management-analytics-dashboard-designing-corporate-tech-event-ppt-example.html*/}
{/* Project 3 image source:https://okcredit.in/blog/how-does-indian-railway-work/ */}
