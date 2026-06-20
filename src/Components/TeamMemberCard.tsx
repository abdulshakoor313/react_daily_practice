import React from "react";

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  email: string;
};

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  email,
}) => {
  return (
    <div className="w-64 bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition duration-300">
      
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-500"
      />

      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        {name}
      </h2>

      <p className="text-sm text-gray-500">
        {role}
      </p>

      <p className="text-xs text-blue-500 mt-2">
        {email}
      </p>
    </div>
  );
};

export default TeamMemberCard;