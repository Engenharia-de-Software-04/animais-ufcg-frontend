"use client";
import "./styles.css";

import Menu from '@/components/Menu';
import HistoryCard from "@/components/HistoryCard";
import Animals from "@/components/Animals";

export default function AdoptionHistory() {
    return <div className="adoption-history-wrapper">
        <Menu/>
        <Animals title="Patas e histórias"/>
        <div className='adoption-history'>
            <div className="history-cards">
                <HistoryCard/>
                <HistoryCard/>
                <HistoryCard/>
            </div>
        </div>
    </div>;
}