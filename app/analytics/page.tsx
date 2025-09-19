import { Alert } from "@heroui/alert";

const Analytics = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold mb-5">Analytics Page</h1>
      <div>
        <Alert
          variant="faded"
          color="primary"
          title="My Alert"
          className="bg-blue-100 dark:bg-blue-100"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis,
          quae tempore necessitatibus placeat saepe.
        </Alert>
      </div>
    </div>
  );
};

export default Analytics;
