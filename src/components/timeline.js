import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

function LeftAlignedTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent sx={{ color: "white", fontSize: "25px" }}>
          AUG,2024 to Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              width: 25,
              height: 25,
              bgcolor: "goldenrod",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="experience-heading">Frontend Developer</div>
          <div className="experience-sub-heading">ATTPL Group</div>
          <div className="experience-description">
            <ul>
              <li>
                Worked on the ATTPL website in the Legal Management Service
                (LMS) field, focused on resolving bugs and enhancing site
                functionality.
              </li>
              <li>
                Integrated APIs and created routes to streamline data flow and
                improve application performance. Completed tasks aimed at
                optimizing the user experience and improving overall site
                efficiency.
              </li>
              <li>
                Utilized React.js to enhance the platform’s effectiveness,
                collaborating with cross-functional teams for the timely
                delivery of high-quality features and updates.
              </li>
            </ul>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ color: "white", fontSize: "25px" }}>
          APR,2024 to JUN,2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              width: 25,
              height: 25,
              bgcolor: "goldenrod",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="experience-heading">Software Engineer Intern</div>
          <div className="experience-sub-heading">Centralogic</div>
          <div className="experience-description">
            <ul>
              <li>
              Engaged in hands-on training on React.js, developing a strong foundation in modern front-end development practices.

              </li>
              <li>
              Developed an Expense Tracker app, utilizing React.js to create a userfriendly interface for managing and tracking
              expenses.
              </li>
            </ul>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ color: "white", fontSize: "25px" }}>
          FEB,2024 to MAR,2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              width: 25,
              height: 25,
              bgcolor: "goldenrod",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="experience-heading">Jr.Software Developer Intern</div>
          <div className="experience-sub-heading">Leopardruns innovation technology</div>
          <div className="experience-description">
            <ul>
              <li>
              Developed and enhanced web applications using React.js and JavaScript
              </li>
              <li>
              Completed various assignments and projects, demonstrating proficiency in React.js
              </li>
            </ul>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ color: "white", fontSize: "25px" }}>
          OCT,2022 - NOV,2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              width: 25,
              height: 25,
              bgcolor: "goldenrod",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="experience-heading">System Engineer </div>
          <div className="experience-sub-heading">INFOSYS</div>
          <div className="experience-description">
            <ul>
              <li>
                Learned JavaScript and React.js concepts and applied various
                techniques to write effective code.{" "}
              </li>
              <li>
                Worked on internal projects to enhance technical skills and
                contribute to team knowledge-sharing sessions.{" "}
              </li>
              <li>
                Engaged in continuous learning to stay updated with the latest
                industry trends and best practices in full-stack development.
              </li>
            </ul>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default LeftAlignedTimeline;
