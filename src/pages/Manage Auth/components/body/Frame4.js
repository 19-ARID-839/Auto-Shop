import React from "react";
import "./frame4.css";
import car4 from "../../../../assets/car4.png";
const Frame4 = () => {
  return (
    <div className="main-conatiner" id="about">
      <div className="first-container">About Us</div>
      <div className="last-part">
        <div className="second-container">
          <img src={car4} alt="car image" />
        </div>
        <div className="third-container">
          <p>
            Hennessey Performance’s Tuner School offers two industry-leading
            certification courses to prepare you for a professional, long-term
            career in the fast-paced and exciting world of automotive tuning!
            Our Automotive Technology course is our most popular program, as it
            teaches the basics of automotive performance in just 14 weeks. Over
            the semester, you will learn about every vital component of
            modern-day performance vehicles. The Automotive Technology program
            combines lecture hall instruction and first-hand lab/shop training,
            so there’s never a dull moment. Students get to practice the thrill
            of working on today’s latest and most common domestic performance
            cars while learning from the industry’s top skilled and experienced
            instructors. After completing the Automotive Technology course, many
            graduates opt to further their knowledge and progress to our
            Advanced Tuning program. This advanced program teaches attendees
            everything from fundamental dynamics and strategy to safety and
            analytics when modifying performance cars, trucks, and SUVs. The
            Advanced Tuning course is 14 weeks long. While it includes the
            obligatory classroom lectures, there is even more hands-on time in
            the lab or shop tuning today’s muscle cars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame4;
