import React from "react";
import { Timeline, TimelineItem } from '../components/timeline/timeline';
import { Check } from 'lucide-react';
import HomePageProjectCarousel from "../components/homePageProjectCarousel/homePageProjectCarousel.tsx";

export default function HomePage() {
  return (
    <>
      <div className="intro flex flex-col sm:flex-row justify-center items-center sm:h-100">
        <div className="">
          <h1 className="text-2xl p-15 pb-5 italic">
            This website is a manifest and a concise digital thesis about what I
            am and what I stand for.
          </h1>
        </div>
        
        <div>
          <h2 className="px-10">
            Latest projects...
            <HomePageProjectCarousel />
          </h2>

        </div>
      </div>

      <Timeline>
      <TimelineItem
        date={new Date('2024-01-01').toISOString()}
        title="Feature Released"
        description="New timeline component is now available"
        icon={<Check />}
        status="completed"
      />
      <TimelineItem
        date={new Date('2024-01-02').toISOString()}
        title="In Progress"
        description="Working on documentation"
        status="in-progress"
      />
      <TimelineItem
        date={new Date('2024-01-03').toISOString()}
        title="Upcoming"
        description="Planning future updates"
        status="pending"
      />
    </Timeline>

    </>
  );
}
