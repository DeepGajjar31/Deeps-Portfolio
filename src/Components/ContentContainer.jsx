import AOS from "aos";
import { useEffect } from "react";

function ContentContainer({ children, type, size, name }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const height = {
    full: "h-[100vh]",
  };

  return (
    <section
      id={name}
      className={`bg-gray-950 ${height[size]} px-8 mt-32 md:px-32 sm:px-18`}
      data-aos="fade"
      data-aos-once="true"
    >
      {children}
     
    </section>
  );
}

export default ContentContainer;