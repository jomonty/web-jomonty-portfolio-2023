const HomeImages = () => {
  const imageSources = [
    "/home-images/home-image-1.webp",
    "/home-images/home-image-2.webp",
    "/home-images/home-image-3.webp",
    "/home-images/home-image-4.webp",
    "/home-images/home-image-5.webp",
  ];

  return imageSources.map((source, index) => {
    return (
      <div
        key={index}
        className="relative w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl"
      >
        <img
          src={source}
          className={`object-scale-down ${
            index % 2 === 0 ? "rotate-1" : "-rotate-1"
          }`}
        />
      </div>
    );
  });
};

export default HomeImages;
