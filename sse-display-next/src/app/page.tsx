"use client"
import Image from "next/image";
import { useState } from "react";
import StudentMentor from "./slides/StudentMentor";

export default function Home() {
  const slides = [<StudentMentor />]
  const [onSlide, setSlide] = useState(0);

  return (
    <div className="flex w-[95%] h-[90%]">
      {slides[onSlide]}
    </div>
  );
}
