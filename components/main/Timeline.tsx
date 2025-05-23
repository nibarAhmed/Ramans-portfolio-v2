"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "../ui/TimelineElement";
import { ExperienceData } from "@/data/Experience";
import { motion } from "framer-motion";
import { ScaleIcon } from "@heroicons/react/24/solid";
import SectionHeader from "../ui/SectionHeader";

const Timeline = () => {
  return (
    <section id="Timeline">
      <SectionHeader
        title="Professional experience"
        subtitle="work experience in the field of software development "
        Icon={<ScaleIcon />}
      />

      <VerticalTimeline>
        {ExperienceData.map((item) => (
          <TimelineElement
            key={item.id}
            type={item.type as "work" | "education" | undefined}
            id={item.id}
            date={item.date}
            title={item.title}
            location={item.location}
            description={item.description}
          />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
