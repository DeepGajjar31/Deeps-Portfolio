import React, { useEffect } from 'react'
import gsap from 'gsap'
import SplitTextJS from 'split-text-js'
import './AnimatedTag.css';

export default function AnimatedTag() {
  useEffect(() => {
    const titles = gsap.utils.toArray(".text-wrapper p");
    const tlx = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tlx.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 10,
          rotateX: -50,
          stagger: 0.02,
        },
        "<"
      );

      tlx.to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -10,
          rotateX: 50,
          stagger: 0.02,
        },
        "<1"
      );
    });
  }, []);

  return (
    <div className="container">
      <div className="text-wrapper m-2.5">
        <p className="text-2 text-white-50 text-center animate-me">
          Full stack Developer
        </p>
        <p className="text-2 text-white-50 text-center animate-me">
          DevOps Engineer
        </p>
        <p className="text-2 text-white-50 text-center animate-me">
          UI/UX Designer
        </p>
        <p className="text-2 text-white-50 text-center animate-me">
          Programmer
        </p>
      </div>
    </div>
  )
}
