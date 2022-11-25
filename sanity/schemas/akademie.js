export default {
    name: "akademie",
    type: "document",
    title: "Akademie",
    fields: [
        {
            title: "Akademie Titel",
            name: "akademieTitel",
            type: "string",
        },
        {
            name: "datum",
            title: "Datum",
            type: "string",
            description: "01.01.2022 - 04.01.2022",
        },
        {
            name: "datumDetail",
            title: "Tag und Uhrzeit",
            type: "string",
            description: "zB. täglich von 10:00 - 17:00",
        },
        {
            title: "Thema",
            name: "thema",
            type: "string",
            description: "z.B. 5 Tage Porträt",
        },
        {
            title: "Überschrift",
            name: "headline",
            type: "string",
            description: "z.B. Faszination Pigmente...",
        },
        {
            title: "Beschreibungstext",
            name: "description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            title: "Material",
            name: "material",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            title: "Preis",
            name: "price",
            type: "string",
            description: "zB € 500,-",
        },
        {
            title: "Preis Anmerkungen",
            name: "priceNotes",
            type: "string",
            description: "zB inkl. Verpflegung",
        },

        {
            title: "Upload Bild",
            name: "image",
            type: "image",
            description: "Upload Bild",
            options: {
                hotspot: true,
            },
        },
    ],
};
