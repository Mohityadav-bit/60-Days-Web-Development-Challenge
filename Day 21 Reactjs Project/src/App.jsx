import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./component/Card";
import User from "./component/User";

const App = () => {
  // const arr = [10,20,30,40]
  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$45/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "1 day ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior",
      pay: "$35/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/021/496/123/non_2x/microsoft-software-logo-brand-symbol-design-illustration-free-vector.jpg",
      companyName: "Microsoft",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hour",
      location: "Pune, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/006/642/223/non_2x/spotify-icon-spotify-logo-spotify-symbol-logo-set-free-vector.jpg",
      companyName: "Spotify",
      datePosted: "2 days ago",
      post: "Product Designer",
      tag1: "Part Time",
      tag2: "Senior",
      pay: "$40/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/020/190/698/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$55/hour",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
      companyName: "Meta",
      datePosted: "6 days ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Junior",
      pay: "$30/hour",
      location: "Noida, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/cf/11/eb/cf11ebcc0a874e3ad3830431f7b0ab58.jpg",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$52/hour",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://i.pinimg.com/736x/6c/14/4f/6c144fe4a22794b81bc746a4652a8be8.jpg",
      companyName: "Airbnb",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$42/hour",
      location: "Gurugram, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg",
      companyName: "LinkedIn",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$38/hour",
      location: "Ahmedabad, India",
    },
    {
      brandLogo: "https://i.pinimg.com/1200x/dd/e9/e0/dde9e02b9559fd7622804d004f477568.jpg",
      companyName: "Adobe",
      datePosted: "5 days ago",
      post: "Creative Developer",
      tag1: "Part Time",
      tag2: "Senior",
      pay: "$44/hour",
      location: "Jaipur, India",
    },
  ];

    // console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function (elem,indx) {
        // return <h1>Hey</h1>
        // return <h1>{elem}</h1>
        return <div key={indx}>
        
        <Card 
        company={elem.companyName} 
        date={elem.datePosted} 
        post={elem.post} 
        tag1={elem.tag1} 
        tag2={elem.tag2} 
        location={elem.location} 
        pay={elem.pay} 
        logo={elem.brandLogo}/>
        </div>
      })}
      {/* <Card /> */}
      {/* <User/> */}
    </div>
  );
};
export default App;
