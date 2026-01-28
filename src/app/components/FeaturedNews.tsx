import React from 'react'
import PostCard from './PostCard';
import Link from 'next/link';

function FeaturedNews() {
  return (
    <section className="bg-accent dark:bg-accent contPadd py-11">
      <h2 className="bodyH2 mb-5">Featured News</h2>
      <div className="grid grid-cols-1 gap-8 [&_div>p]:hidden sm:grid-cols-2 md:grid-rows-3 md:gap-5">
        {[0, 1, 2, 3].map((_, index) => (
          <Link
            key={index}
            href="/"
            className={`block ${index === 0 ? 'md:row-span-3' : ''}`}
          >
            <PostCard horizontal={index !== 0} showReadMoreLink={false} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedNews