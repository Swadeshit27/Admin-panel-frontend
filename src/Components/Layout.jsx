const Layout = ({ children, header }) => {
  return (
    <div className="w-full h-full  pt-24 px-6">
      <h1 className="font-semibold text-red-100 text-lg capitalize">
        {header}
      </h1>
      {children}
    </div>
  );
};

export default Layout;
