"use client";

import { addToast, Alert, Button } from "@heroui/react";

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold mb-5">Home Page</h1>
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
      <br />
      <Button
        className="w-[100px] dark:bg-purple-200"
        color="secondary"
        variant={"flat"}
        onPress={() =>
          addToast({
            classNames: {
              closeButton:
                "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
            },
            closeIcon: (
              <svg
                fill="none"
                height="32"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="32"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ),
            color: "primary",
            description: "Toast displayed successfully",
            hideIcon: true,
            title: "Toast title",
          })
        }
      >
        Test
      </Button>
    </div>
  );
};

export default Home;
