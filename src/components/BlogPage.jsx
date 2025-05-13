import React from 'react';
import BlogCard from './BlogCard';
import Textoverlap from './Textoverlap';
import InvestmentBanner from './InvestmentBannner';
import Button from './Includes/Button';

function BlogPage() {
  const textoverlay = [
    {
      id: 2,
      heading: 'Blogs',
      paragraph1: "• What's New Trending",
      paragraph2: 'Latest Blog & Posts',
    },
  ];

  const investmentbanner = [
    {
      id: 1,
      heading: 'Dream home',
      heading2: 'Looking for a dream Investment?',
      paragrapgh: 'We can help you realize your dream of a new home',
      buttonname: 'Explore Our Properties',
    },
  ];

  return (
    <div className="flex flex-col items-center bg-[#F1F4FF] px-20 py-29">
      <div className="w-full max-w-[1200px]">
        {/* Blog Header Row */}
        <div className="flex justify-between w-full items-center mb-6">
          <Textoverlap textoverlay={textoverlay} />
          <Button name="See All Blogs" />
        </div>

        {/* Blog Cards */}
        <div className="flex gap-4 items-center p-[2%] justify-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        {/* Investment Banner Section */}
        {investmentbanner.map((item) => (
          <InvestmentBanner
            key={item.id}
            heading={item.heading}
            heading2={item.heading2}
            paragrapgh={item.paragrapgh}
            buttonname={item.buttonname}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
