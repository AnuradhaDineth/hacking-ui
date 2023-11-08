import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewAll from "./ReviewAll";

function ReviewPage() {
  
const [text, setText] = useState([
  { id: "1",
  topic:"Perfect Hacking !! ",
  msg:
    "Perfect , Highly recommended කියන්න වචන නෑ. හොදටම කියල දෙනවා…ගෙවන ගානට වඩා වටිනව 👌👌👌👌👌👌",
  img:"https://hacking.lk/wp-content/uploads/2023/01/06.png",
  name:"Thiseth Weerasinghe",
  position:"After A/L Student", },

  { id: "2",
  topic:"Highly recommended !! ",
  msg:
    "Highly recommended…නියමෙට කියල දෙනව. බය නැතුව කරන්න පුලුවන් ඔන කෙනෙක්ට … A to Z හොදටම කියල දෙනවා… ගෙවන ගානට වඩා වටිනව ❤❤❤❤❤",
  img:"https://hacking.lk/wp-content/uploads/2023/01/04-2.png",
  name:"Madhuwantha Shalitha",
  position:"Gozilla Member", },

  { id: "3",
  topic:"No words to say ayye, Thank you so much !! ",
  msg:
    "මම IT degree එකක් කරන කෙනෙක් . තාම 1st year. ගෙවන ගානට මෙච්චර ලොකු content එකක් හම්බෙයි කියල හිතුවේ නෑ මුලින්. සැහෙන ලොකු දැනුමක් ගත්තා. No words to say ayye, Thank you so much !!",
  img:"https://hacking.lk/wp-content/uploads/2023/01/poornika-image.png",
  name:"Poornika",
  position:"University Student", },

  { id: "4",
  topic:"It's my Dream Course 🙂",
  msg:
    "Highly recommended !!! I am After O/L Student . But I can understand it clearly , because you explained each point in detail. Thank You Ayye",
  img:"https://hacking.lk/wp-content/uploads/2023/01/09-1-1-1-1-1-1-1-1.png",
  name:"Isuru Madawa",
  position:"After O/L Student", },
]);

  return (
    <div>
      <div className="text-center grid grid-cols-1 mt-10">
        <label className="uppercase text-green-400 tracking-widest font-semibold sm:text-xs md:text-xl">
          feedback From our previous Students
        </label>
        <label className="text-white md:text-4xl sm:text-3xl font-extrabold mt-2">
          What did they Say about us
        </label>
        <label className="text-white text-base mt-8">
          මීට කලින් godzilla team එකත් එක්ක join උන students ලගේ reviwes මෙහෙමයි
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-1 mt-8">
        {text.map((text)=>{
          return(
            <ReviewCard msg={text.msg} topic={text.topic} img={text.img} name={text.name} position={text.position}/>
          );
        })}
        <ReviewAll/>
      </div>
    </div>
  );
};

export default ReviewPage;
