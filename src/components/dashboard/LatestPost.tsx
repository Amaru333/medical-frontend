import React from "react";

function LatestPost() {
  return (
    <div className="bg-slate-100 p-6 rounded-2xl mt-12 flex items-center">
      <img
        className="w-[30rem] h-72 rounded-2xl"
        src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="px-12">
        <p className="text-slate-600 font-bold text-2xl">Keep calm and relax! Healthy Master Class.</p>
        <button className="text-white bg-slate-800 text-lg font-semibold rounded-full px-8 py-2 mt-10">Read More</button>
      </div>
    </div>
  );
}

export default LatestPost;
