const Layout = ({ children, header }) => {
  return (
    <div className="w-full h-full  pt-20 px-6">
      <h1 className="font-semibold dark:text-red-100 text-lg capitalize text-black">
        {header}
      </h1>
      {children}
    </div>
  );
};

export default Layout;
