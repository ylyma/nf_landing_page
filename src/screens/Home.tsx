import React from "react";
import CustomButton from "../components/CustomButton";
import JobCard from "../components/JobListing/JobCard";

const Home = () => {
  return (
    <div style={{ padding: 50, backgroundColor: "#f3f2ef" }}>
      <CustomButton title={"Apply"} fill={true}></CustomButton>
      <JobCard
        companyName={"Tiktok"}
        title={"Deep Learning Engineer Intern, Tiktok e-Commerce - 2024"}
        logoUrl="../../assets/company-placeholder.png"
        location={"Singapore"}
        tags={[
          "Graph",
          "TensorFlow",
          "PyTorch",
          "Spark",
          "C",
          "Python",
          "Jupyter",
        ]}
        datePosted={"about 2 hours ago"}
        rating={3.6}
        type={"Data Sci"}
        salary="S$7,450 - S$11,767"
      ></JobCard>
    </div>
  );
};

export default Home;
