export interface Location {
    id: number;
    name: string;
    type: string;
    address: string;
    description: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    icon: React.ReactNode;
    color: string;
}

export interface ContactInfo {
    icon: React.ReactNode;
    bg: string;
    title: string;
    content: string;
    delay: string;
}

export interface ServiceItem {
    name: string;
    available: boolean;
}

export interface DemographicData {
    icon: React.ReactNode;
    bg: string;
    value: string;
    label: string;
    delay: string;
}