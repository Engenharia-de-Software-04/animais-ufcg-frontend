"use client";
import "./styles.css";

import Menu from '@/components/Menu';
import HistoryCard from "@/components/HistoryCard";

export default function AdoptionHistory() {
    return <div>
        <Menu/>
        <div className='adoption-history'>
            <div className="history-cards">
                <HistoryCard/>
                <HistoryCard/>
                <HistoryCard/>
                
            </div>
        </div>
    </div>;
}