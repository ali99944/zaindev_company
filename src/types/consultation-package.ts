interface ConsultationPackage {
    id: number;
    name: string;
    type: string;
    price: number;
    year_price: number;
    status: number;
    created_at: string;
    updated_at: string;
    packages_features: Array<{
        id: number;
        name: string;
        value: string;
        description: string;
        consultation_features: string;
        created_at: string;
        updated_at: string;
    }>;
}

export default ConsultationPackage;
