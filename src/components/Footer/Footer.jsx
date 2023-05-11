import React from "react";

export default function Footer() {
  return (
    <div className="mx-6 my-4">
      <footer className="flex flex-col rounded-lg bg-neutral-400 bg-opacity-50 p-8 p-10">
        <div className="text-center text-md text-white">
          <p>JobTrackr</p>
          <p>Copyright © 2023 - All rights reserved</p>
        </div>
        <div>
          <div className="flex justify-center items-center pt-2">
            <a
              target="_blank"
              rel="noreferrer"
              className="group rounded-full hover:bg-neutral-800"
              aria-label="LevelUpLounge github page"
              href="https://github.com/anthonykhong/job_trackr"
            >
              <img
                className="h-12"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682908470/github_acp75p.svg"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
