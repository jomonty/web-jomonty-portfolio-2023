const TechIconList = ({ tech }) => {
  const iconList = () =>
    tech.map((icon, index) => {
      return (
        <div key={index}>
          <img src={icon.src} alt={icon.alt} height="50rem" width="50rem" />
        </div>
      );
    });

  return (
    <div className="grid" align="center">
      {iconList}
    </div>
  );
};

export default TechIconList;
