import React from 'react';
import { X, ExternalLink, MapPin } from 'lucide-react';
import { type Location } from '../types';

interface LocationPopupProps {
    location: Location;
    isVisible: boolean;
    onClose: () => void;
    onDirections: (location: Location) => void;
}

const LocationPopup: React.FC<LocationPopupProps> = ({
    location,
    isVisible,
    onClose,
    onDirections
}) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in-up">
            <div className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl animate-scale-in">
                <div className="relative">
                    <div className={`h-32 ${location.color} flex items-center justify-center text-white`}>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 floating-animation">
                                {React.cloneElement(location.icon as React.ReactElement)}
                            </div>
                            <h4 className="text-xl font-bold">{location.name}</h4>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-3 transform hover:scale-105 transition-transform">
                            {location.type}
                        </span>
                        <p className="text-gray-600 text-sm mb-2">
                            <MapPin className="w-4 h-4 inline mr-1" />
                            {location.address}
                        </p>
                        <p className="text-gray-700">{location.description}</p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => onDirections(location)}
                            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center hover:scale-105"
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Rute
                        </button>
                        <button
                            onClick={onClose}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all hover:scale-105"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationPopup;