import React from "react";

const myBlog = [
    { category: "In the News", title: "What a $20M donation and data will do for the 'benefits access challenge'", date: "April 21, 2022", link: "Read More" },
    { category: "Blog", title: "Making a Government More Efficient and Equitable", date: "April 18, 2022", link: "See Update" },
    { category:"Blog", title: "Leveraging Data and Text Outreach to Connect Families to WIC", date: "April 8, 2022", link: "View Reports" }
]


export default function Blog() {
    return (
        <div className="lg:mx-20 mx-8">
            <div className="blog-title text-left mb-8 text-blue-700 lg:flex flex-none justify-between items-center">
                <div>
                    <div className="text-3xl font-bold">Latest Insights</div>
                    <div>Check out what we've been working on recently</div>
                </div>
                <div>
                    
                    <a className="my-4 inline-block px-12 py-3 text-sm font-bold text-blue-400 border border-gray-500 rounded-full hover:bg-blue-900 hover:text-white active:bg-blue-900 focus:outline-none focus:ring " href="/download">
                        View All
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 text-left gap-4 justify-center items-center">
                {myBlog.map((item) => {
                    return (

                        <a href="" className="block transition-shadow bg-white group hover:shadow-sm">
                            <span className="inline-block font-medium px-4 py-2 text-xs text-gray-900 bg-gray-200 rounded-full">
                                {item.category}
                            </span>

                            <h2 className="mt-3 lg:text-2xl text-lg font-bold text-blue-700">{item.title}</h2>

                            <p className="mt-3 text-xs font-bold text-blue-700 uppercase">
                                {item.date}
                            </p>

                            <p className="relative inline-block mt-8 mb-16 text-sm font-bold text-blue-400">
                                <span
                                    className="absolute inset-x-0 bottom-0 transition-transform transform h-2/3 group-hover:scale-110"
                                ></span>
                                <span className="relative">
                                    {item.link}
                                    <span aria-hidden="true">&rarr;</span>
                                </span>
                            </p>
                        </a>
                    );
                })}
            </div>

        </div>
    );
}