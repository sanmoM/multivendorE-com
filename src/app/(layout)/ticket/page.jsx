"use client";

import { useState } from 'react';
import TicketCreate from '@/components/ticket/ticket-create/TicketCreate';
import React from 'react'
import TicketView from '@/components/ticket/ticket-view/TicketView';

export default function page() {
    const [step, setStep] = useState("ticket-view");
    return (
        <div>
            {
                step === "create-ticket" && <TicketCreate setStep={setStep} />
            }
            {
                step === "ticket-view" && <TicketView setStep={setStep} />
            }
        </div>
    )
}
