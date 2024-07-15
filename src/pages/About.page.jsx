const About = () => {
  return (
    <section className="bg-yellow-300 w-full h-full px-24 py-14 flex flex-col gap-6 font-bold main-font">
      <div className="text-yellow-300 bg-main text-6xl p-4 main-font font-extrabold">About Us</div>
      <div className=" bg-main p-4 space-y-5">
        <p className="block text-xl">
          City Hoops is a digital platform designed to connect basketball
          enthusiasts recrational
        </p>
        <p className="block text-xl">
          basketball activites. It empowers indivisuals of all skill levels to
          find and and participate in pick-up games and tournaments within their
          local communities.
        </p>
        <div className="space-y-10">
          <h2 className="uppercase text-4xl text-yellow-300 main-font font-extrabold">
            Key features:
          </h2>
          <div className="flex flex-col gap-8 ml-8">
            <div className="">
              <h3 className="block uppercase font-extrabold text-yellow-300 text-2xl leading-[.8]">
                Pick up Game functionality
              </h3>
              <p className="blocl text-xl">
                Users can create and join pick-up games, specifying location, skill
                level and preferred court availability.
              </p>
            </div>
            <div className="">
              <h3 className="block uppercase font-extrabold text-yellow-300 text-2xl leading-[.8]">
                Tournament organization
              </h3>
              <p className="block text-xl">
                City Hoops provides tools for organizing and managing basketball
                tournaments, including registration, scheduling, bracket creation.
              </p>
            </div>
            <div className="">
              <h3 className="block uppercase font-extrabold text-yellow-300 text-2xl leading-[.8]">
                Community Building
              </h3>
              <p className="block text-xl">
                the platform fosters interaction through player profiles, messaging
                features, and forums, allowing users to connect and build
                relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
