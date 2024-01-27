import Head from "next/head";
import "@/styles/tailwind.css";
import { Header } from "@/components/Header";
import HomePage  from "@/components/Home";
import Hero from "@/components/Hero";
import Carousel, { CarouselHandle } from "@/components/Carousel";
import React, { useState, useRef } from "react";



export default function Home() {
  const carouselRef = useRef<CarouselHandle>(null);

  const handleHeaderNavigation = (index: number) => {
    carouselRef.current?.updateActiveIndex(index);
  };

  return (
    <div>
      
      <Hero>
      <Header onNavigate={handleHeaderNavigation} />
      <Carousel ref={carouselRef} />
      </Hero>
    </div>
  );
}