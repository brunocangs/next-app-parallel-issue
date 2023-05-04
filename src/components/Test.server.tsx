export const TestServer = () => {
  return <div>This is a server component</div>;
};

export const TestServerAsync = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>This is an async server component</div>;
};
