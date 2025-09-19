"use client";

import { Alert } from "@heroui/alert";
import { Accordion, AccordionItem } from "@heroui/accordion";

const Faq = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold mb-5">FAQ Page</h1>
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
      <div style={{ marginTop: "20px" }}>
        <Accordion
          variant="bordered"
          className="bg-gray-50 dark:bg-gray-50"
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Accordion 1"
            classNames={{
              title: "cursor-pointer",
              base: "text-black",
              indicator: "cursor-pointer",
            }}
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Accordion 2"
            classNames={{
              title: "cursor-pointer",
              base: "text-black",
              indicator: "cursor-pointer",
            }}
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Accordion 3"
            classNames={{
              title: "cursor-pointer",
              base: "text-black",
              indicator: "cursor-pointer",
            }}
          >
            {/* Base, Indicator, Title */}
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
