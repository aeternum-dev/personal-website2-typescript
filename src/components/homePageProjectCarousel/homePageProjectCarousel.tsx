import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NetniteThumbnail from "../../assets/netnite_tumbnail.png";
import { Link } from "react-router-dom";

export default function HomePageProjectCarousel() {
  return (
    <div>
      <Carousel className="w-65">
        <CarouselContent>
          <CarouselItem>
            <div className="rounded-md border-2 p-5">
                <img src={NetniteThumbnail} alt="Netnite thumbnail" className="w-100"/>
                <h1 className="text-xl py-4">Netnite</h1>
                <p>
                  Netnite is a web-based game that allows players to create and
                  manage their own virtual cities. Players can build and customize
                  their cities, interact with other players, and complete various
                  challenges to earn rewards.
                </p>
                <Link to="/projects/netnite" className="text-blue-500 underline">
                    Learn more >>
                </Link>
            </div>
        </CarouselItem>
          <CarouselItem>
          <div className="rounded-md border-2 p-5">
                <img src={NetniteThumbnail} alt="Buckets thumbnail" className="w-100"/>
                <h1 className="text-xl py-4">Buckets</h1>
                <p>
                  Buckets is a simple and streamlined note-taking app that allows
                  users to collect and organize their thoughts in a more visually appealing
                  and user-friendly interface. Buckets provide easy to o understand and navigate
                  well-structured way to for storing one's ideas.
                </p>
                <Link to="/projects/netnite" className="text-blue-500 underline">
                    Learn more >>
                </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="rounded-md border-2 p-5">
                <img src={NetniteThumbnail} alt="GuitarCharged thumbnail" className="w-100"/>
                <h1 className="text-xl py-4">GuitarCharged</h1>
                <p>
                GuitarCharged is an innovative learning tool aiming to make learning guitar
                effortless and fun. With the help of AI, users can learn to relaibly play every
                chord in a fun and gamified way.
                </p>
                <Link to="/projects/netnite" className="text-blue-500 underline">
                    Learn more >>
                </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="rounded-md border-2 p-5">
                <img src={NetniteThumbnail} alt="Yavne thumbnail" className="w-100"/>
                <h1 className="text-xl py-4">Yavne</h1>
                <p>
                A personal social engineering project, where I aim to create a community of
                like-minded individuals who are interested in learning and sharing knowledge
                and pushing the boundaries of what is possible with technology.
                </p>
                <Link to="/projects/netnite" className="text-blue-500 underline">
                    Learn more >>
                </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
