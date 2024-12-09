"use client";

import React, { useState } from "react";
import DateRangePicker from "../../../common/date/DateRangePicker";
import { useRouter, usePathname } from "next/navigation";
import { format } from "date-fns";

const FormsearchSidebarMovies = () => {
    const Router = useRouter();
    const pathname = usePathname();

    const [fromDate, setFromDate] = useState(new Date(new Date().setFullYear(new Date().getFullYear() - 20)));
    const [toDate, setToDate] = useState(new Date());

    const handleForm = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchParams = new URLSearchParams();

        const params = {
            "sort_by": form.get("sort"),
            "release_date.gte": format(fromDate, "yyyy-MM-dd"),
            "release_date.lte": format(toDate, "yyyy-MM-dd")
        };

        Object.entries(params).forEach(([key, value]) => {
            if (value) searchParams.append(key, value);
        });

        Router.push(`${pathname}?${searchParams.toString()}`);
    };

    return (
        <div className="p-6 mt-10 bg-background-body max-w-[300px] rounded-lg shadow-2xl shadow-background-hover">
            <div className="mb-6 border-b border-border">
                <h2 className="text-2xl font-bold text-text-primary mb-4 font-poppins text-center">
                    Filtrer les films
                </h2>
            </div>

            <form onSubmit={handleForm} className="space-y-6">
                <div className="space-y-4 border-b border-border pb-6">
                    <label className="block text-lg font-medium text-text-secondary">
                        Date de sortie
                    </label>
                    <DateRangePicker
                        fromDate={fromDate}
                        toDate={toDate}
                        setFromDate={setFromDate}
                        setToDate={setToDate}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="sort" className="block text-lg font-medium text-text-secondary">
                        Trier par
                    </label>
                    <select
                        name="sort"
                        id="sort"
                        defaultValue="popularity.desc"
                        className="w-full rounded-md bg-background-body text-text-primary border border-border p-2 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                    >
                        <option value="popularity.desc">Popularité</option>
                        <option value="vote_average.desc">Note</option>
                        <option value="vote_count.desc">Nombre de votes</option>
                        <option value="release_date.desc">Date de sortie</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-accent-primary text-text-primary font-medium rounded-md shadow-md hover:bg-accent-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                >
                    APPLIQUER LES FILTRES
                </button>
            </form>
        </div>
    );
};

export default FormsearchSidebarMovies;
