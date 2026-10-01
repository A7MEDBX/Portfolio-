"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ExternalLink, Trophy, Users, Clock, GitMerge, Award } from "lucide-react";

export function OlympicsBracketVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-4 border-b border-[#E5E2DC] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span className="font-semibold text-[#222222]">
          Figure 1: Two-Stage Tournament Structure &amp; Double-Elimination Workflow
        </span>
        <span className="text-[#2D4A3E]">Qualification to Grand Final</span>
      </figcaption>

      <div className="w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 860 360"
          className="w-full min-w-[760px] text-xs font-mono"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* STAGE 1: QUALIFICATION ROUND */}
          <rect x="15" y="40" width="165" height="280" rx="3" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="97" y="65" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Stage 1: Qualification</text>
          <text x="97" y="80" textAnchor="middle" fill="#2D4A3E" fontSize="9.5">Contest-Wide Filter</text>
          <path d="M25 90 L170 90" stroke="#E5E2DC" strokeWidth="1" />

          <rect x="25" y="100" width="145" height="42" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="97" y="117" textAnchor="middle" fill="#222222" fontSize="9" fontWeight="600">All Registered Contestants</text>
          <text x="97" y="132" textAnchor="middle" fill="#686868" fontSize="8.5">Individual Seated Timed Run</text>

          <rect x="25" y="152" width="145" height="52" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="97" y="170" textAnchor="middle" fill="#2D4A3E" fontSize="9" fontWeight="600">90-Minute Contest</text>
          <text x="97" y="184" textAnchor="middle" fill="#686868" fontSize="8.5">10 Problems (Varying Diff.)</text>
          <text x="97" y="196" textAnchor="middle" fill="#686868" fontSize="8">Rank: Solved Count + Penalty</text>

          <rect x="25" y="214" width="145" height="42" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="97" y="231" textAnchor="middle" fill="#222222" fontSize="9" fontWeight="600">Top 16 Performers</text>
          <text x="97" y="246" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Advance to Duel Bracket</text>

          <text x="97" y="280" textAnchor="middle" fill="#686868" fontSize="8">Remaining Participants</text>
          <text x="97" y="295" textAnchor="middle" fill="#686868" fontSize="8">Ranked by Qualification Score</text>

          {/* Qualification -> Duel Tournament Arrow */}
          <path d="M180 235 L230 235 L230 180 L260 180" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="260,180 253,176 253,184" fill="#2D4A3E" />
          <text x="215" y="170" textAnchor="middle" fill="#2D4A3E" fontSize="8" fontWeight="600">Top 16</text>

          {/* STAGE 2: DUEL TOURNAMENT (DOUBLE ELIMINATION) */}
          {/* WINNER BRACKET (UPPER) */}
          <rect x="260" y="40" width="370" height="135" rx="3" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="445" y="65" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Stage 2: Winner Bracket (0 Losses)</text>
          <text x="445" y="80" textAnchor="middle" fill="#2D4A3E" fontSize="9">Head-to-Head Duels (1 Problem • First Correct Submission Wins)</text>
          <path d="M275 88 L615 88" stroke="#E5E2DC" strokeWidth="1" />

          {/* Rounds Progression */}
          <rect x="275" y="98" width="70" height="60" rx="2" fill="#F5F3EE" stroke="#E5E2DC" />
          <text x="310" y="118" textAnchor="middle" fill="#222222" fontSize="8.5" fontWeight="600">Round of 16</text>
          <text x="310" y="132" textAnchor="middle" fill="#686868" fontSize="7.5">8 Duels</text>
          <text x="310" y="146" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">8 Winners</text>

          <path d="M345 128 L365 128" stroke="#2D4A3E" strokeWidth="1.2" />

          <rect x="365" y="98" width="70" height="60" rx="2" fill="#F5F3EE" stroke="#E5E2DC" />
          <text x="400" y="118" textAnchor="middle" fill="#222222" fontSize="8.5" fontWeight="600">Quarterfinals</text>
          <text x="400" y="132" textAnchor="middle" fill="#686868" fontSize="7.5">4 Duels</text>
          <text x="400" y="146" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">4 Winners</text>

          <path d="M435 128 L455 128" stroke="#2D4A3E" strokeWidth="1.2" />

          <rect x="455" y="98" width="70" height="60" rx="2" fill="#F5F3EE" stroke="#E5E2DC" />
          <text x="490" y="118" textAnchor="middle" fill="#222222" fontSize="8.5" fontWeight="600">Semifinals</text>
          <text x="490" y="132" textAnchor="middle" fill="#686868" fontSize="7.5">2 Duels</text>
          <text x="490" y="146" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">2 Winners</text>

          <path d="M525 128 L545 128" stroke="#2D4A3E" strokeWidth="1.2" />

          <rect x="545" y="98" width="75" height="60" rx="2" fill="#F5F3EE" stroke="#2D4A3E" />
          <text x="582" y="118" textAnchor="middle" fill="#2D4A3E" fontSize="8.5" fontWeight="700">Winner Final</text>
          <text x="582" y="132" textAnchor="middle" fill="#222222" fontSize="8">1 Duel</text>
          <text x="582" y="146" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">Winner to Final</text>

          {/* Drop arrow: Winner Bracket -> Loser Bracket */}
          <path d="M310 158 L310 185 L350 185" stroke="#8C887B" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="340" y="178" fill="#8C887B" fontSize="7.5">1st Defeat</text>

          {/* LOSER BRACKET (LOWER) */}
          <rect x="260" y="195" width="370" height="125" rx="3" fill="#FAF9F6" stroke="#8C887B" strokeWidth="1.2" />
          <text x="445" y="218" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Loser Bracket (1 Defeat • Elimination on 2nd Loss)</text>
          <text x="445" y="232" textAnchor="middle" fill="#686868" fontSize="8.5">Redemption Matches • High Pressure Single-Duel Rounds</text>
          <path d="M275 238 L615 238" stroke="#E5E2DC" strokeWidth="1" />

          <rect x="285" y="248" width="95" height="55" rx="2" fill="#F5F3EE" stroke="#E5E2DC" />
          <text x="332" y="268" textAnchor="middle" fill="#222222" fontSize="8.5" fontWeight="600">Elimination R1 &amp; R2</text>
          <text x="332" y="282" textAnchor="middle" fill="#686868" fontSize="7.5">Losers from WB</text>
          <text x="332" y="294" textAnchor="middle" fill="#8C887B" fontSize="7.5">Defeated Eliminated</text>

          <path d="M380 275 L415 275" stroke="#8C887B" strokeWidth="1.2" />

          <rect x="415" y="248" width="95" height="55" rx="2" fill="#F5F3EE" stroke="#E5E2DC" />
          <text x="462" y="268" textAnchor="middle" fill="#222222" fontSize="8.5" fontWeight="600">Loser Semifinal</text>
          <text x="462" y="282" textAnchor="middle" fill="#686868" fontSize="7.5">Survivor vs WB Semis</text>
          <text x="462" y="294" textAnchor="middle" fill="#8C887B" fontSize="7.5">1 Winner Advances</text>

          <path d="M510 275 L545 275" stroke="#8C887B" strokeWidth="1.2" />

          <rect x="545" y="248" width="75" height="55" rx="2" fill="#F5F3EE" stroke="#8C887B" />
          <text x="582" y="268" textAnchor="middle" fill="#222222" fontSize="8.5" fontWeight="600">Loser Final</text>
          <text x="582" y="282" textAnchor="middle" fill="#686868" fontSize="7.5">1 Match</text>
          <text x="582" y="294" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">Advances to Grand Final</text>

          {/* Convergence to Grand Final */}
          <path d="M620 128 L665 128 L665 160 L680 160" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="680,160 673,156 673,164" fill="#2D4A3E" />
          <text x="645" y="122" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">WB Champ</text>

          <path d="M620 275 L665 275 L665 200 L680 200" stroke="#8C887B" strokeWidth="1.5" />
          <polygon points="680,200 673,196 673,204" fill="#8C887B" />
          <text x="645" y="285" textAnchor="middle" fill="#8C887B" fontSize="7.5">LB Champ</text>

          {/* GRAND FINAL */}
          <rect x="680" y="105" width="160" height="150" rx="3" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="2" />
          <text x="760" y="132" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="12">Grand Final</text>
          <text x="760" y="148" textAnchor="middle" fill="#2D4A3E" fontSize="9.5">Championship Duel</text>
          <path d="M695 158 L825 158" stroke="#E5E2DC" strokeWidth="1" />

          <rect x="695" y="168" width="130" height="38" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="760" y="184" textAnchor="middle" fill="#222222" fontSize="9" fontWeight="600">WB Winner vs LB Winner</text>
          <text x="760" y="198" textAnchor="middle" fill="#686868" fontSize="8">First Correct AC Wins</text>

          <rect x="695" y="214" width="130" height="30" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeDasharray="3 2" />
          <text x="760" y="228" textAnchor="middle" fill="#2D4A3E" fontSize="8" fontWeight="600">Tiebreaker Problem</text>
          <text x="760" y="238" textAnchor="middle" fill="#686868" fontSize="7.5">Introduced If Unsolved</text>
        </svg>
      </div>

      <p className="text-[12px] text-[#686868] font-sans mt-3 text-center">
        Competition architecture: 90-minute Qualification Round seeds the top 16 into a double-elimination duel tournament, ensuring competitors must lose twice before elimination.
      </p>
    </figure>
  );
}

export function OlympicsEventGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    {
      src: "/images/olympics/olympics-duel-match.jpg",
      title: "Direct Duel in Progress",
      category: "Stage 2 Tournament",
      alt: "Competitors seated at coding stations during a head-to-head duel match under timed conditions",
      caption: "Participants engaged in a direct 1-on-1 problem-solving duel, monitored by event judges and peers.",
    },
    {
      src: "/images/olympics/olympics-qualification-hall.jpg",
      title: "Qualification Contest Hall",
      category: "Stage 1 Qualification",
      alt: "Hall full of participants working individually on the 10 qualification problems",
      caption: "The 90-minute qualification round where all contestants competed across 10 algorithmic problems.",
    },
    {
      src: "/images/olympics/olympics-tournament-bracket.jpg",
      title: "Live Match Tracking & Bracket",
      category: "Operational Coordination",
      alt: "Audience and participants viewing live bracket progression and match results",
      caption: "Tracking winner and loser bracket progressions in real-time as duel outcomes were decided.",
    },
    {
      src: "/images/olympics/olympics-awards-ceremony.jpg",
      title: "Awards & Final Recognition",
      category: "Event Closing",
      alt: "Winners and organizers holding certificates and awards at the conclusion of the IEEE Olympics",
      caption: "Recognizing tournament champions and top performers following the grand final match.",
    },
  ];

  return (
    <section className="my-10 border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-8 rounded-xs">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E5E2DC] pb-4 mb-6 gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium block mb-1">
            Authentic Event Documentation
          </span>
          <h2 className="font-serif text-2xl font-normal text-[#222222]">
            Event Photo Gallery
          </h2>
        </div>
        <span className="text-xs font-mono text-[#686868]">
          4 Verified Photographs
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="group border border-[#E5E2DC] bg-white rounded-xs overflow-hidden flex flex-col transition-colors hover:border-[#2D4A3E]/40"
          >
            {/* Image Container with Fixed Aspect Ratio */}
            <div
              className="relative aspect-4/3 bg-[#F4F1EA] cursor-pointer overflow-hidden"
              onClick={() => setSelectedPhoto(idx)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-102 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-[#FAF9F6]/90 backdrop-blur-xs text-[#222222] text-xs font-mono px-3 py-1.5 rounded-xs transition-opacity flex items-center gap-1.5 shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-[#2D4A3E]" />
                  <span>View Photo</span>
                </span>
              </div>
            </div>

            {/* Caption & Metadata */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="text-[#2D4A3E]">{photo.category}</span>
                  <span className="text-[#686868]">Photo 0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-base font-normal text-[#222222] mb-1.5">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#686868] font-sans leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#222222]/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF9F6] border border-[#E5E2DC] rounded-xs overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E5E2DC] bg-[#F7F5F0]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium">
                {photos[selectedPhoto].category} — Photo 0{selectedPhoto + 1}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="text-[#686868] hover:text-[#222222] p-1 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-4/3 w-full bg-[#1A1A1A]">
              <Image
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                fill
                sizes="(max-width: 800px) 100vw, 800px"
                className="object-contain"
              />
            </div>

            <div className="p-5 bg-[#FAF9F6]">
              <h4 className="font-serif text-lg text-[#222222] mb-1">
                {photos[selectedPhoto].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#686868] font-sans leading-relaxed">
                {photos[selectedPhoto].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
