import React from "react";

export const Cards = () => {
    return (
        <div className="flex items-center justify-center">

        <div className="w-3/4 bg-white rounded-md overflow-hidden shadow-lg flex">
      {/* Left Side: YouTube Embedded Video */}
      <div className="w-1/2 bg-black items-center justify-center flex">
        {/* Replace the YouTube embed code with your actual video embed code */}
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/v5xpFW-aXyI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ></iframe>
      </div>

      {/* Right Side: Title, Description, and Button */}
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold mb-2">CodeIT (Online IDE)</h1>
        <div class="border-b border-black"></div>
        <h3 className="text-l mt-1 font-semibold">React, NodeJS, Flask, BeautifulSoup</h3>
        <div class="bg-gray-100 p-3">
        <ul class="list-disc p-2">
            <li className="text-black-500">Developed an online IDE specifically designed for competitive programmers using <b>monaco‑editor</b> wherr users can code in multiple languages.</li>
            <li className="text-black-500">Implemented a feature to scrape test cases from a user‑provided URL using <b>BeautifulSoup</b>.</li>
            <li className="text-black-500">Created a system to check if the code produces the expected out‑ put by matching the test cases which are scrapped.</li>
            <li className="text-black-500">Also Incorporated a <b>web development compiler</b> where users can practice their web development skills.</li>
        </ul>
        </div>
        <a
          href="https://github.com/your-github-repo"
          className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block"
          target="_blank"
          rel="noopener noreferrer"
          >
          View on GitHub
        </a>
      </div>
    </div>
        </div>

    )
}
