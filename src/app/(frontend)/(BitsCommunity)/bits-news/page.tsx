import React from 'react'
import PagesHero from '@/app/components/PagesHero'
import FeaturedNews from '@/app/components/FeaturedNews';
import PostCard from '@/app/components/PostCard';

function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <FeaturedNews />
        <section className="bg-white dark:bg-white min-h-[500px] contPadd py-11 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-10">
          {[1,2,3,4,5,6,7,8,9,10,11,13].map((article, i)=>(
            <PostCard key={i}/>
          ))}
        </section>
      </main>
    </>
  );
}

export default page