import React from 'react';
import { Building, Heart, School, TreePine, Camera, Factory } from 'lucide-react';
import type { Location } from '../types';

export const locations: Location[] = [
    {
        id: 1,
        name: "Rumah Kepala Dusun",
        type: "Pemerintahan",
        address: "Jl. Raya Dusun Srumbung No. 123",
        description: "Rumah Kepala Dusun Srumbung",
        coordinates: { lat: -7.204972, lng: 110.414694 },
        icon: React.createElement(Building, { className: "w-5 h-5" }),
        color: "bg-blue-600"
    },
    {
        id: 2,
        name: "Puskesmas Srumbung",
        type: "Kesehatan",
        address: "Jl. Kesehatan No. 45",
        description: "Fasilitas kesehatan utama yang melayani masyarakat Dusun Srumbung dan sekitarnya.",
        coordinates: { lat: -7.5693, lng: 110.8290 },
        icon: React.createElement(Heart, { className: "w-5 h-5" }),
        color: "bg-red-600"
    },
    {
        id: 3,
        name: "TKRA NURUL FALAH Srumbung",
        type: "Pendidikan",
        address: "Jl. Pendidikan No. 12",
        description: "Pendidikan TK Dusun Srumbung",
        coordinates: { lat: -7.5673, lng: 110.8270 },
        icon: React.createElement(School, { className: "w-5 h-5" }),
        color: "bg-green-600"
    },
    {
        id: 4,
        name: "Hutan Pinus",
        type: "Wisata",
        address: "Dusun Srumbung Utara",
        description: "Destinasi wisata alam dengan hutan pinus yang asri dan jalur hiking yang menantang.",
        coordinates: { lat: -7.5653, lng: 110.8250 },
        icon: React.createElement(TreePine, { className: "w-5 h-5" }),
        color: "bg-green-700"
    },
    {
        id: 5,
        name: "Air Terjun Pelangi",
        type: "Wisata",
        address: "Dusun Srumbung Selatan",
        description: "Air terjun indah setinggi 25 meter dengan pemandangan pelangi yang menakjubkan.",
        coordinates: { lat: -7.5713, lng: 110.8310 },
        icon: React.createElement(Camera, { className: "w-5 h-5" }),
        color: "bg-blue-700"
    },
    {
        id: 6,
        name: "Pasar Dusun",
        type: "Ekonomi",
        address: "Jl. Pasar No. 8",
        description: "Pusat perdagangan Dusun dengan berbagai produk lokal dan kebutuhan sehari-hari.",
        coordinates: { lat: -7.5688, lng: 110.8285 },
        icon: React.createElement(Factory, { className: "w-5 h-5" }),
        color: "bg-orange-600"
    }
];