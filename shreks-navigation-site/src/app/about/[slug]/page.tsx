type Props = {
  params: Promise<{ slug: string }>;
};

const About = () => {
  const getCharacter = async ({ params }: Props) => {};

  return (
    <div className="w-screen h-screen text-black">
      <p>hello world</p>
    </div>
  );
};
export default About;
