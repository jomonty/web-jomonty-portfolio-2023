const HomeImages = () => {
  const imageSources = [
    "/sample-home-image-1.jpg",
    "/sample-home-image-2.jpg",
    "/sample-home-image-3.jpg",
    "/sample-home-image-4.jpg",
    "/sample-home-image-5.jpg",
  ];

  return imageSources.map((source, index) => {
    return (
      <div
        key={index}
        className="relative aspect-square w-44 flex-none overflow-hidden rounded-xl object-cover sm:w-72 sm:rounded-2xl"
      >
        <img
          src={source}
          className={`h-full w-full ${
            index % 2 === 0 ? "rotate-1" : "-rotate-1"
          }`}
        />
      </div>
    );
  });
};

export default HomeImages;
