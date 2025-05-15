import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Slider from '@mui/material/Slider';

import pool from "../assets/pool.png"
import pool2 from "../assets/pool2.png"
import house1 from "../assets/house1.png"

import MyPropertyCard from './Includes/MyPropertyCard';

import { Link } from 'react-router-dom';

function AdminDashboard() {
  const [priceRange, setPriceRange] = useState([6000, 100000]);
  const [locationSearch, setLocationSearch] = useState('');
  const [typeSearch, setTypeSearch] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  
  // Sample property data - in a real app, this might come from an API
  const properties = [
    { 
      id: 1, 
      name: "Tungis Luxury", 
      address: "900, Creside WI 54913", 
      location: "rwp", 
      type: "Villas", 
      price: 85000, 
      img: pool,
      bedrooms: 3,
      bathrooms: 2,
      squareFoot: 1800,
      floor: 2,
      forSale: true
    },
    { 
      id: 2, 
      name: "Luxury Penthouse", 
      address: "Sumner Street Los Angeles", 
      location: "bwp", 
      type: "Apartment", 
      price: 95000, 
      img: pool2,
      bedrooms: 4,
      bathrooms: 3,
      squareFoot: 2200,
      floor: 8,
      forSale: false
    },
    { 
      id: 3, 
      name: "Luxury Apartment", 
      address: "223, Creside Santa Maria", 
      location: "isl", 
      type: "Apartment", 
      price: 75000, 
      img: house1,
      bedrooms: 2,
      bathrooms: 2,
      squareFoot: 1500,
      floor: 5,
      forSale: true
    },
    { 
      id: 4, 
      name: "Cozy Cottage", 
      address: "87 Mountain View, Peshawar", 
      location: "pes", 
      type: "Cottage", 
      price: 45000, 
      img: house1,
      bedrooms: 2,
      bathrooms: 1,
      squareFoot: 1200,
      floor: 1,
      forSale: true
    },
    { 
      id: 5, 
      name: "Modern Duplex", 
      address: "42 Seaside Blvd, Karachi", 
      location: "kci", 
      type: "Duplex Bungalow", 
      price: 120000, 
      img: house1,
      bedrooms: 5,
      bathrooms: 3,
      squareFoot: 3000,
      floor: 2,
      forSale: true
    },
    { 
      id: 6, 
      name: "Family Home", 
      address: "55 Garden Street, Islamabad", 
      location: "isl", 
      type: "Villas", 
      price: 110000, 
      img: house1,
      bedrooms: 4,
      bathrooms: 3,
      squareFoot: 2500,
      floor: 2,
      forSale: true
    }
  ];

  // Filter properties based on search inputs and price range
  useEffect(() => {
    let results = properties;
    
    // Filter by location if a location is selected
    if (locationSearch) {
      results = results.filter(property => 
        property.location.toLowerCase() === locationSearch.toLowerCase()
      );
    }
    
    // Filter by type if a search term is entered
    if (typeSearch) {
      results = results.filter(property => 
        property.type.toLowerCase().includes(typeSearch.toLowerCase()) ||
        property.name.toLowerCase().includes(typeSearch.toLowerCase())
      );
    }
    
    // Filter by price range
    results = results.filter(property => 
      property.price >= priceRange[0] && property.price <= priceRange[1]
    );
    
    setFilteredProperties(results);
  }, [locationSearch, typeSearch, priceRange]);

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleLocationChange = (e) => {
    setLocationSearch(e.target.value);
  };

  const handleTypeSearch = (e) => {
    setTypeSearch(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className='w-full'>  
        <TopBar />
      </div>

      <div className="flex flex-1">
        <Sidebar />

        <div className='flex justify-center'>
          <div className='maindiv p-7 flex'>
          <div className='leftsideinfo flex flex-col p-3 border-[1px] rounded-[6px] h-fit shadow-xl border-[#EAEDF1]'>
            <div className='border-b-[1px] border-[#EAEDF1]'>
              <h1 className='text-[#5D7186] font-semibold text-[1rem]'>Properties</h1>
              <p className='text-[#5D7186] pb-2 font-normal text-[0.865rem]'>
                Showing {filteredProperties.length} Properties
              </p>
            </div>

            {/* Location Dropdown */}
            <div className='pt-2'>
              <h1 className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Properties Location</h1>
              <select 
                className="bg-[#FFFFFF] text-[#878C9F] h-[2.5rem] pl-2 w-[17rem] border-[1px] border-[#EAEDF1] outline-none"
                value={locationSearch}
                onChange={handleLocationChange}
              >
                <option value="">All Locations</option>
                <option value="rwp">rwp</option>
                <option value="bwp">bwp</option>
                <option value="isl">isl</option>
                <option value="pes">pes</option>
                <option value="kci">kci</option>
              </select>
            </div>

            {/* Type of Place */}
            <div className='pt-2'>
              <h1 className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Type Of Place</h1>
              <input 
                className='bg-[#FFFFFF] text-[#878C9F] h-[2.5rem] pl-2 w-[17rem] border-[1px] border-[#EAEDF1] outline-none' 
                type="text"
                value={typeSearch}
                onChange={handleTypeSearch}
                placeholder="Search by property type or name"
              />
            </div>

            {/* Price Range */}
            <div className='pt-2'>
              <h1 className='text-[#323A46] pb-2 font-medium text-[0.94rem]'>Custom Price Range :</h1>
              <Slider
                value={priceRange}
                onChange={handleSliderChange}
                min={0}
                max={200000}
                step={1000}
                valueLabelDisplay="auto"
              />
              <div className='flex gap-4'>
                <div className='border-[1px] text-[#5D7186] text-[0.75rem] font-normal border-[#EAEDF1] px-6 py-1 rounded-[4px]'>
                  ${priceRange[0]}
                </div>
                <div className='text-[#687D92] font-semibold text-[0.865rem]'>to</div>
                <div className='border-[1px] text-[#5D7186] text-[0.75rem] font-normal border-[#EAEDF1] px-6 py-1 rounded-[4px]'>
                  ${priceRange[1]}
                </div>
              </div>
            </div>

            {/* Accessibility Features */}
            <div className='pt-2'>
              <h1 className='text-[#323A46] pb-2 font-medium text-[0.94rem]'>Accessibility Features :</h1>
              <div className='flex gap-20'>
                <div className='flex gap-2 self-start pb-4'>
                  <input className='border-[#0000002D] border' type="checkbox" />
                  <p className='text-[#5D7186] font-medium text-[0.856rem]'>For Rent</p>
                </div>
                <div className='flex gap-2 self-start pb-4'>
                  <input className='border-[#0000002D] border' type="checkbox" />
                  <p className='text-[#5D7186] font-medium text-[0.856rem]'>For Sale</p>
                </div>
              </div>
            </div>

            <div className='pt-2'>
                <h1 className='text-[#323A46] pb-2 font-medium text-[0.94rem]'>Properties Type :</h1>

                <div className="grid grid-cols-2 gap-y-3 gap-x-10">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#2E429E]" />
                    <span className="text-[#5D7186] font-medium text-[0.856rem]">All Properties</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#2E429E]" />
                    <span className="text-[#5D7186] font-medium text-[0.856rem]">Cottage</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#2E429E]" />
                    <span className="text-[#5D7186] font-medium text-[0.856rem]">Villas</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#2E429E]" />
                    <span className="text-[#5D7186] font-medium text-[0.856rem]">Apartment</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#2E429E]" />
                    <span className="text-[#5D7186] font-medium text-[0.856rem]">Duplex Bungalow</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#2E429E]" />
                    <span className="text-[#5D7186] font-medium text-[0.856rem]">Duplex Bungalow</span>
                  </label>
                </div>
             </div>


            <div className='pt-2'>
              <h1 className='text-[#323A46] pb-2 font-medium text-[0.94rem]'>Bedrooms :</h1>
              <div className="flex gap-1">
                <div className='border-[1px] rounded-[6px] hover:bg-[#2E429E] hover:text-[#FFFFFF] border-[#2E429E] w-18 text-center text-[#2E429E] text-[0.865rem] font-normal py-1'>1 BHK</div>
                <div className='border-[1px] rounded-[6px] hover:bg-[#2E429E] hover:text-[#FFFFFF] border-[#2E429E] w-18 text-center text-[#2E429E] text-[0.865rem] font-normal py-1'>2 BHK</div>
                <div className='border-[1px] rounded-[6px] hover:bg-[#2E429E] hover:text-[#FFFFFF] border-[#2E429E] w-18 text-center text-[#2E429E] text-[0.865rem] font-normal py-1'>3 BHK</div>
                <div className='border-[1px] rounded-[6px] hover:bg-[#2E429E] hover:text-[#FFFFFF] border-[#2E429E] w-18 text-center text-[#2E429E] text-[0.865rem] font-normal py-1'>4 & 5 BHK</div>
              </div>
            </div>

           <div className='pt-2'>
              <h1 className='text-[#323A46] pb-2 font-medium text-[0.94rem]'>Accessibility Features :</h1>

              <div className="grid grid-cols-2 gap-y-3 gap-x-10">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#2E429E]" />
                  <span className="text-[#5D7186] font-medium text-[0.856rem]">Balcony</span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#2E429E]" />
                  <span className="text-[#5D7186] font-medium text-[0.856rem]">Parking</span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#2E429E]" />
                  <span className="text-[#5D7186] font-medium text-[0.856rem]">Spa</span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#2E429E]" />
                  <span className="text-[#5D7186] font-medium text-[0.856rem]">Pool</span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#2E429E]" />
                  <span className="text-[#5D7186] font-medium text-[0.856rem]">Restaurant</span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#2E429E]" />
                  <span className="text-[#5D7186] font-medium text-[0.856rem]">Fitness Club</span>
                </label>
              </div>

              <div className='pt-8'>
                {/* Reset filters button */}
                <button 
                  onClick={() => {
                    setLocationSearch('');
                    setTypeSearch('');
                    setPriceRange([6000, 100000]);
                  }}
                  className='bg-[#F0934E] w-full mt-4 px-4 py-2 rounded-[6px] text-[#FFFFFF] text-[0.865rem] font-normal'
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          <div className='rightsideproperty flex flex-col'>
              <div className='pb-4 px-5 flex justify-between items-center'>
                <p className='text-[#687D92] font-medium'>
                  Found {filteredProperties.length} matching properties
                </p>
                <Link to="/addproperty">
                  <button className='bg-[#2E429E] px-5 py-2 rounded-[6px] text-[#FFFFFF] text-[0.865rem] font-normal'>
                    Add New Property
                  </button>
                </Link>
              </div>
              <div className='flex flex-wrap gap-5 pt-5 px-5 overflow-y-auto max-h-[56rem]'>
                {filteredProperties.length > 0 ? (
                  filteredProperties.map(property => (
                    <MyPropertyCard 
                      key={property.id}
                      name={property.name} 
                      address={property.address} 
                      img={property.img}
                      bedrooms={property.bedrooms}
                      bathrooms={property.bathrooms}
                      squareFoot={property.squareFoot}
                      floor={property.floor}
                      forSale={property.forSale}
                    />
                  ))
                ) : (
                  <div className='w-full text-center py-8'>
                    <p className='text-lg text-[#687D92]'>No properties found matching your search criteria.</p>
                    <p className='text-[#2E429E] mt-2'>Try adjusting your filters or search terms.</p>
                  </div>
                )}
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;