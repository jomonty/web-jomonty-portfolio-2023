const ContentWrapper = ({ children }) => {
  return (
    <div className="sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">{children}</div>
      </div>
    </div>
  );
};

export default ContentWrapper;
