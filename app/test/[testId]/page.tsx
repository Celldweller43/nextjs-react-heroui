interface MyProps {
  params: {
    testId: string;
  }
}

const TestCase = async ({ params }: MyProps) => {
  const { testId } = await params;

  return (
    <div>Test Case: {testId}</div>
  );
};

export default TestCase;