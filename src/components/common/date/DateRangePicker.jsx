"use client";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importer les styles par défaut
import { subYears } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa"; // Icône de calendrier

const DateRangePicker = ({ fromDate, toDate, setFromDate, setToDate }) => {
    const today = new Date();
    const twentyYearsAgo = subYears(today, 60);

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative">
                <label htmlFor="fromDate" className="block text-sm text-text-muted mb-2">
                    Du
                </label>
                <div className="relative">
                    <DatePicker
                        selected={fromDate}
                        onChange={(date) => setFromDate(date)}
                        maxDate={today}
                        minDate={twentyYearsAgo}
                        className="w-full rounded-md bg-background-body text-text-primary border border-border p-2 pl-10 outline-none"
                        dateFormat="yyyy-MM-dd"
                        showMonthDropdown // Activer le menu déroulant pour les mois
                        showYearDropdown // Activer le menu déroulant pour les années
                        dropdownMode="select" // Permet d'afficher les menus déroulants comme des listes
                    />
                    <FaCalendarAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-text-muted pointer-events-none" />
                </div>
            </div>
            <div className="relative">
                <label htmlFor="toDate" className="block text-sm text-text-muted mb-2">
                    Au
                </label>
                <div className="relative">
                    <DatePicker
                        selected={toDate}
                        onChange={(date) => setToDate(date)}
                        minDate={fromDate || twentyYearsAgo}
                        maxDate={today}
                        className="w-full rounded-md bg-background-body text-text-primary border border-border p-2 pl-10 outline-none"
                        dateFormat="yyyy-MM-dd"
                        showMonthDropdown // Activer le menu déroulant pour les mois
                        showYearDropdown // Activer le menu déroulant pour les années
                        dropdownMode="select" // Permet d'afficher les menus déroulants comme des listes
                    />
                    <FaCalendarAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-text-muted pointer-events-none" />
                </div>
            </div>
        </div>
    );
};

export default DateRangePicker;
