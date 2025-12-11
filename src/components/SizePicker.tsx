'use client';
import { useState } from "react";

const SIZES = [
    "38", "39", "40", "41", "42", "43", "44", "45"
];

export interface SizePickerProps {
    className?: string;
}

export default function SizePicker({ className = ""}: SizePickerProps) {
    
    const [ selected, setSelected ] = useState<string | null>(null);

    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            <div className="flex items-center justify-between">
                <p className="text-body-medium text-dark-900">Select size</p>
                <button className="text-caption text-dark-700 underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-500]">
                    Size Guide
                </button>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
                {SIZES.map((s) => {

                    const isActive = selected === s;

                    return (
                        <button
                        key={s}
                        onClick={() => setSelected(isActive ? null : s)}
                        className={`rounded-lg border px-3 py-3 text-center text-body transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-500] ${isActive ? "border-dark-900 bg-dark-900" : "border-light-300 hover:border-dark-500 text-dark-700"}`}
                        aria-pressed={isActive}>
                            {s}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}