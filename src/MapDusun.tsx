import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const lat = -7.204917;
const lng = 110.414722;

const icon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const MapClickHandler = () => {
    useMapEvent("click", () => {
        window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
    });
    return null;
};

const MapDusun = () => {
    return (
        <div>
            <p className="text-gray-600 mb-4">Klik pada peta untuk menuju ke Google Maps</p>

            <div
                className="rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow h-96 bg-gradient-to-br from-green-100 to-blue-100"
            >
                <MapContainer
                    center={[lat, lng]}
                    zoom={16}
                    scrollWheelZoom={true}
                    className="h-full w-full relative z-0"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[lat, lng]} icon={icon}>
                        <Popup>
                            <a
                                href={`https://www.google.com/maps?q=${lat},${lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Buka di Google Maps
                            </a>
                        </Popup>
                    </Marker>

                    <MapClickHandler />
                </MapContainer>
            </div>
        </div>

    );
};

export default MapDusun;
