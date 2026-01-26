import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImpactComp from './ImpactComp';

function Impact() {
  return (
    <section className="bg-accent dark:bg-accent min-h-[500px] contPadd py-11">
      <h2 className="bodyH2">Impact at a Glance</h2>
      <Tabs defaultValue="25years" className="w-full mt-5">
        <TabsList className="bg-orange w-full sm:w-[300px] h-[45px] rounded-full mx-auto p-0">
          <TabsTrigger
            value="25years"
            className="rounded-full text-black font-sans font-bold text-base data-[state=active]:bg-blue data-[state=active]:text-white"
          >
            25 Years
          </TabsTrigger>
          <TabsTrigger
            value="beyond25"
            className="rounded-full text-black font-sans font-bold text-base data-[state=active]:bg-blue data-[state=active]:text-white"
          >
            Beyond25
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="25years"
          className="pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <ImpactComp />
          <ImpactComp />
          <ImpactComp />
          <ImpactComp />
          <ImpactComp />
          <ImpactComp />
          <ImpactComp />
          <ImpactComp />
        </TabsContent>
        <TabsContent
          value="beyond25"
          className="pt-10 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8"
        >
          By 2030
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default Impact