import React from 'react';
import { MapPin } from 'lucide-react';
import type { Location } from '../types';

interface LocationCardProps {
    location: Location;
    onClick: (location: Location) => void;
    index: number;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, onClick, index }) => {
    const staggerDelay = `animate-stagger-${(index % 6) + 1}`;

    return (
        <div
            onClick={() => onClick(location)}
            className={`flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-all hover:shadow-md group hover-lift animate-slide-in-up ${staggerDelay}`}
        >
            <div className={`w-12 h-12 ${location.color} rounded-full flex items-center justify-center mr-4 text-white group-hover:scale-110 transition-transform`}>
                {location.icon}
            </div>
            <div className="flex-1">
                <h5 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    {location.name}
                </h5>
                <p className="text-sm text-gray-600">{location.type}</p>
                <p className="text-xs text-gray-500">{location.address}</p>
            </div>
            <MapPin className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
        </div>
    );
};

export default LocationCard;