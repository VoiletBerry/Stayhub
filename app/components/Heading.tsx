"use client";

interface HeadingProps {
  title: string;
  subTittle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subTittle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold"> {title}</div>
      <div className="font-light text-neutral-500 mt-2">{subTittle}</div>
    </div>
  );
};

export default Heading;
