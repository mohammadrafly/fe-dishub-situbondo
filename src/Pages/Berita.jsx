import React, { useState } from "react";
import Card from "../Components/Card";
import ReactPaginate from "react-paginate";

const Berita = () => {
    const fakeData = [
        {
            id: 1,
            title: "Freya",
            image: "https://cdn0-production-images-kly.akamaized.net/eqDct11zGwKOPRGiQzpXn2Imm1s=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4653258/original/087187700_1700235754-JKT48_Freya.jpg",
            description: "Lorem Ipsfahjduhosuihdfniuouosiuhdfuiweh.",
        },
        {
            id: 2,
            title: "Zee",
            image: "https://thumb.viva.id/intipseleb/1265x711/2023/04/01/6427590267fc3-zee-jkt48.jpg",
            description: "jahdf ijnHWSiuedh nafiusedhnc wiuhfisdgifhbzodisfhbzouidshfsiouHfisdou",
        },
        {
            id: 3,
            title: "Adel",
            image: "https://img.cumicumi.com/uploads/public/2023-10-30/202/310/301/th_711x391_202310301698642895653f3bcf7ead7.jpg",
            description: "dhsiu cnbuysbnvfytgb8euyfweoiejwpu wuyhfoauoW[AU9R0EGUE RUE9",
        },
        {
            id: 4,
            title: "Haruka",
            image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2022/11/Haruka.jpg",
            description: "MDFOIV G9E8U4590 URGIJGIOFDJ [FDO DS90UBS89ERTUG0WEI GFA2390 RSIZJGVDOKJG0E9RUGE09GU",
        },
        {
            id: 5,
            title: "Ashel",
            image: "https://cdn1-production-images-kly.akamaized.net/KbKWZ-UZunY15oHm7tCXP_3C2i0=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4610706/original/065966400_1697277971-WhatsApp_Image_2023-10-14_at_17.05.28.jpeg",
            description: "ouisahfdiuhfiudsghfisudhfiousdhfuiosh",
        },
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    // Calculate the number of pages
    const pageCount = Math.ceil(fakeData.length / itemsPerPage);

    // Handle page click
    const handlePageClick = (event) => {
        const newPage = event.selected;
        setCurrentPage(newPage);
    };

    // Get the current items to display
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = fakeData.slice(start, end);

    return (
        <section>
            <div className="flex flex-col mx-auto bg-[#F8FAFF] p-6 sm:p-8 lg:p-10">
                <div>
                    <h1 className="text-4xl text-black font-semibold">Berita Populer</h1>
                    <span className="text-pink-500 font-semibold text-4xl absolute top-[-20]">_____</span>
                </div>
                <div className="mt-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {currentItems.map((item) => (
                        <Card 
                            key={item.id}
                            title={item.title} 
                            image={item.image} 
                            description={item.description} 
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <ReactPaginate
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"flex space-x-2"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        activeClassName={"active"}
                        previousClassName={"hidden"} // Hide previous
                        nextClassName={"hidden"} // Hide next
                    />
                </div>
            </div>
        </section>
    );
}

export default Berita;
