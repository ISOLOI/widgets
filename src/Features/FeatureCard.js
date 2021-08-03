import React from 'react'
import './FeatureCard.css'

export default function FeatureCard(props) {
    return (
        <div className="feature-card">
            <div className="feature-title">
                <h3>
                    {props.title}
                </h3>
            </div>
            <div className="feature-desc">
                {props.desc}
            </div>
        </div>
    )
}