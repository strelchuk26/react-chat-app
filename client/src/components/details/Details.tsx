import React from "react";

interface DetailsProps {
    className?: string;
}

const Details: React.FC<DetailsProps> = ({ className }) => {
    return <div className={className}>Details</div>;
};

export default Details;
