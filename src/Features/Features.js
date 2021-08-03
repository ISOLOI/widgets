import React from 'react'
import FeatureCard from './FeatureCard'


export default function Features() {
    return (
        <div classNmae="feature-wrapper">
                 <span>Instant matches from a network that already wants to interview</span>
                <span>Engineers that don't appear from stale data scraped from LinkedIn</span>
            <FeatureCard 
            title="Stop allowing firms with sales backgrounds represent your interests"
            desc="When I personally collected data from 20 different recruiters, it was sad how ALL 20 recruiters relied on ME to decide if my skills matched the role they initally sent a message stating I was exactly what the company needed."
            />
             <FeatureCard 
            title="No time wasted on phone calls before you get result!"
            desc="Use of a recuiter with years of software engineering experience. Currently recruiters don't know why you even need a specific position filled. Wasted phonecalls with your future employee are standard and use 30 minutes to simply turn your requirements into a question based checklist whenever they get lucky with a reply to their spammy messages sent out by fishy scraping tools."
            />
            <FeatureCard 
            title="Instant Results via access to multiple communities"
            desc="Instead of wishful thinking with scraped data, we deliver potential hires that belong to communities that I have been a part of for years. Specific channels on slack and discord have active users. Most servers are created soley for single languages, making it effortless to review them based on what requirements arer desired for the position you need filled."
            />
            <FeatureCard 
            title="Compare submissions instantly using resources we request as a prerequisite"
            desc="CUSTOM CHECKLIST of prerequisites gives you a standardized overview of each candidate based on what all engineers agree are needed. This list is instantly available for your team, removing any time recruiters waste forcing themselves in between you and the interview."
            />


        </div>
    )
}