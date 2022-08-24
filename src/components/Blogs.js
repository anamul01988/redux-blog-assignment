import React from "react";
import {useSelector} from "react-redux";
import searchIcon from '../assets/search.svg';
function Blogs() {
    const blogs = useSelector((state)=> state.blogs)
    console.log(blogs);
    
  return (
    <>
      <div class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-8 lg:px-12 rounded-lg text-sm ring-emerald-200">
        <input
          class="outline-none border-none bg-gray-50 h-full w-full mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
        <img
          class="inline h-6 cursor-pointer"
          src={searchIcon}
          alt="Search"
        />
      </div>

      <section class="relative bg-gray-50 pt-8 pb-20  sm:px-6 lg:pt-16 lg:pb-16 px-8 lg:px-12">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              ALL BLOGS ARE HERE
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>

          {/* <!-- card grid  --> */}
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/* <!-- single card  --> */}
            {
                blogs.map((item) => (
                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                      <img
                        class="h-48 w-full object-cover"
                        src={item.img}
                        alt=""
                      />
                    </div>
      
                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div class="flex-1">
                        <p class="text-sm font-medium text-indigo-600">
                          <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                            {item.category}
                          </span>
                        </p>
                        <a href="#" class="block mt-1">
                          <p class="text-xl font-semibold text-gray-900">
                            {item.title}
                          </p>
                        </a>
                      </div>
                      <div class="mt-6 flex items-center">
                        <div class="flex-shrink-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            src={item.author_img}
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-sm font-medium text-gray-900 hover:underline">
                            {item.author_title}
                          </p>
                          <div class="flex space-x-1 text-sm text-gray-500">
                            <time datetime="2020-03-16">{item.author_td}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span> {item.author_time} </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
