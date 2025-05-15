import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import pool from "../assets/pool.png";
import MyPropertyCard from './Includes/MyPropertyCard';
import Slider from '@mui/material/Slider';
import ReactFlagsSelect from "react-flags-select";
import { Instagram } from 'lucide-react';

function AddProperty() {
  // Financial calculator state
  const [valuation, setValuation] = useState(940000);
  const [income, setIncome] = useState(1000000);
  const [downpayment, setDownpayment] = useState(15);
  const [loanterms, setLoanterms] = useState(6);
  const [debt, setDebt] = useState(300);

  // Property details state (for real-time updates)
  const [propertyDetails, setPropertyDetails] = useState({
    name: "Tungis Luxury",
    address: "900, Creside WI 54913",
    propertyType: "Villas",
    price: "1,000,000",
    forSale: true,
    bedrooms: "4",
    bathrooms: "3",
    squareFoot: "2,500",
    floor: "2",
    zipCode: "54913",
    location: "rwp",
    country: "US"
  });

  // Handle input changes for property details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value
    });
  };

  // Format address for the property card
  const formatAddress = () => {
    let address = propertyDetails.address || "";
    if (propertyDetails.zipCode) {
      address += propertyDetails.zipCode ? `, ${propertyDetails.zipCode}` : "";
    }
    if (propertyDetails.location) {
      address += `, ${propertyDetails.location}`;
    }
    return address;
  };

  const formatCurrency = (num) => {
    return num.toLocaleString('en-US');
  };
  
  const [selected, setSelected] = useState("US");

  return (
    <div className="min-h-screen flex flex-col">
      <div className='w-full'>  
        <TopBar />
      </div>

      <div className="flex flex-1">
        <Sidebar />

        <div className='flex justify-center'>
          <div className='maindiv p-7 flex'>
            <div className='leftsidediv flex flex-col p-3 h-fit'>
              <div>
                {/* The MyPropertyCard will update in real-time */}
                <MyPropertyCard 
                  name={propertyDetails.name || "Property Name"} 
                  address={formatAddress()} 
                  img={pool}
                  bedrooms={propertyDetails.bedrooms}
                  bathrooms={propertyDetails.bathrooms}
                  squareFoot={propertyDetails.squareFoot}
                  floor={propertyDetails.floor}
                  forSale={propertyDetails.forSale} 
                />
              </div>
              <div className='flex gap-2 pt-6'>
                <button className='border-[1px] cursor-pointer border-[#2E429E] rounded-[6px] text-[#2E429E] text-[0.865rem] font-normal px-10 py-2'>Add Property</button>
                <button className='bg-[#2E429E] cursor-pointer text-[#FFFFFF] rounded-[6px] text-[0.865rem] font-normal px-15 py-2'>Cancel</button>
              </div>

              <div className='w-[19rem]'>
                <div className='pt-6 flex justify-center'>
                  <h1 className='text-[#000000] font-semibold text-[1rem]'>Mortgage Calculator</h1>
                </div>
                <div className='pt-5 flex justify-between'>
                  <p className='text-[#545151] text-[0.865rem] font-normal'>PROPERTY VALUATION</p>
                  <h1 className='text-[#000000] font-medium text-[0.865rem]'>AED {formatCurrency(valuation)}</h1>
                </div>
                <div className='pt-1'>
                  <Slider
                    value={valuation}
                    onChange={(event, newValue) => setValuation(newValue)}
                    min={500000}
                    max={2000000}
                    step={100000}
                    valueLabelDisplay="auto"
                  />
                </div>
                <div className='pt-5 flex justify-between'>
                  <p className='text-[#545151] text-[0.865rem] font-normal'>INCOME</p>
                  <h1 className='text-[#000000] font-medium text-[0.865rem]'>AED {formatCurrency(income)}</h1>
                </div>
                <div className='pt-1'>
                  <Slider
                    value={income}
                    onChange={(event, newValue) => setIncome(newValue)}
                    min={750000}
                    max={1570000}
                    step={150000}
                    valueLabelDisplay="auto"
                  />
                </div>
                <div className='pt-5 flex justify-between'>
                  <p className='text-[#545151] text-[0.865rem] font-normal'>DOWN PAYMENT</p>
                  <h1 className='text-[#000000] font-medium text-[0.865rem]'>{formatCurrency(downpayment)}%</h1>
                </div>
                <div className='pt-1'>
                  <Slider
                    value={downpayment}
                    onChange={(event, newValue) => setDownpayment(newValue)}
                    min={0}
                    max={100}
                    step={5}
                    valueLabelDisplay="auto"
                  />
                </div>
                <div className='pt-5 flex justify-between'>
                  <p className='text-[#545151] text-[0.865rem] font-normal'>LOAN TERMS</p>
                  <h1 className='text-[#000000] font-medium text-[0.865rem]'>{formatCurrency(loanterms)} Years</h1>
                </div>
                <div className='pt-1'>
                  <Slider
                    value={loanterms}
                    onChange={(event, newValue) => setLoanterms(newValue)}
                    min={0}
                    max={15}
                    step={1}
                    valueLabelDisplay="auto"
                  />
                </div>
                <div className='pt-5 flex justify-between'>
                  <p className='text-[#545151] text-[0.865rem] font-normal'>MONTHLY DEBTS</p>
                  <h1 className='text-[#000000] font-medium text-[0.865rem]'>AED {formatCurrency(debt)}/Month</h1>
                </div>
                <div className='pt-1 border-b-[2px] border-[#B7AEAE] pb-3'>
                  <Slider
                    value={debt}
                    onChange={(event, newValue) => setDebt(newValue)}
                    min={150}
                    max={1500}
                    step={100}
                    valueLabelDisplay="auto"
                  />
                </div>

                <div className='pt-7'><button className='bg-[#2E429E] px-28 py-2.5 rounded-3xl text-[1.12rem] font-semibold text-[#FFFFFF]'>Calculate</button></div>
              </div>
            </div>

            <div className='rightsidediv pt-3 flex gap-10 flex-col'>
              <div className='border-[1px] px-2 py-3 border-[#EAEDF1] rounded-xl shadow-xl'>
                <p className='text-[#5D7186] pb-3 text-[1rem] font-semibold'>Add Property Photo</p>
                <div className='flex flex-col justify-center items-center border-[2px] border-[#EAEDF1] w-155 h-64 rounded-xl border-dashed'>
                  <Instagram className="cursor-pointer" size={25} color="#2E429E" />
                  <p className='text-[1.5rem] pt-3 font-normal text-[#2E429E]'>Drop your images here, or click to browse</p>
                  <p className='text-[0.82rem] font-normal text-[#687D92]'>1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed</p>
                </div>
              </div>
              
              <div className='border-[1px] px-2 py-4 border-[#EAEDF1] rounded-xl shadow-xl'>
                <p className='text-[#5D7186] pb-4 text-[1rem] font-semibold'>Add Property Details</p>
                <div className='flex gap-3'>
                  <div className='flex flex-col'>
                    <label className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Property Name</label>
                    <input 
                      className='border-[1px] border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-1 w-[19rem] rounded-[5px]' 
                      type="text" 
                      name="name"
                      value={propertyDetails.name}
                      onChange={handleInputChange}
                      placeholder='Name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Property Categories</label>
                    <input 
                      className='border-[1px] border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-1 w-[19rem] rounded-[5px]' 
                      type="text" 
                      name="propertyType"
                      value={propertyDetails.propertyType}
                      onChange={handleInputChange}
                      placeholder='Villas'
                    />
                  </div>
                </div>
                
                <div className='flex gap-3 pt-4'>
                  <div className='flex flex-col'>
                    <label className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Price</label>
                    <div className='flex'>
                      <div className='bg-[#F8F9FA] flex items-center justify-center px-1.5 rounded-l-[5px] border-[1px] border-r-0 border-[#EAEDF1]'>
                        <Instagram className="cursor-pointer" size={17} color="#2E429E" />
                      </div>
                      <input 
                        className='border-[1px] border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-1 w-[11rem] rounded-r-[5px]' 
                        type="text" 
                        name="price"
                        value={propertyDetails.price}
                        onChange={handleInputChange}
                        placeholder='000'
                      />
                    </div>
                  </div>
                  
                  <div className='flex flex-col'>
                    <label className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Property For</label>
                    <select
                      className='border-[1px] border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-1 rounded-[5px]'
                      name="forSale"
                      value={propertyDetails.forSale ? "Sale" : "Rent"}
                      onChange={(e) => setPropertyDetails({
                        ...propertyDetails,
                        forSale: e.target.value === "Sale"
                      })}
                    >
                      <option value="Sale">Sale</option>
                      <option value="Rent">Rent</option>
                    </select>
                  </div>
                  
                  <div className='flex flex-col'>
                    <label className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Bedroom</label>
                    <div className='flex'>
                      <div className='bg-[#F8F9FA] flex items-center justify-center px-1.5 rounded-l-[5px] border-[1px] border-r-0 border-[#EAEDF1]'>
                        <Instagram className="cursor-pointer" size={17} color="#2E429E" />
                      </div>
                      <input 
                        className='border-[1px] border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-1 w-[11.5rem] rounded-r-[5px]' 
                        type="text" 
                        name="bedrooms"
                        value={propertyDetails.bedrooms}
                        onChange={handleInputChange}
                        placeholder='00'
                      />
                    </div>
                  </div>
                </div>
                
                <div className='flex gap-3 pt-4'>
                  <div className='flex flex-col'>
                    <label className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Bathroom</label>
                    <div className='flex'>
                      <div className='bg-[#F8F9FA] flex items-center justify-center px-1.5 rounded-l-[5px] border-[1px] border-r-0 border-[#EAEDF1]'>
                        <Instagram className="cursor-pointer" size={17} color="#2E429E" />
                      </div>
                      <input 
                        className='border-[1px] border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-1 w-[10.5rem] rounded-r-[5px]' 
                        type="text" 
                        name="bathrooms"
                        value={propertyDetails.bathrooms}
                        onChange={handleInputChange}
                        placeholder='000'
                      />
                    </div>
                  </div>
                  
                  <div className='flex flex-col'>
                    <label className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Square Foot</label>
                    <div className='flex'>
                      <div className='bg-[#F8F9FA] flex items-center justify-center px-1.5 rounded-l-[5px] border-[1px] border-r-0 border-[#EAEDF1]'>
                        <Instagram className="cursor-pointer" size={17} color="#2E429E" />
                      </div>
                      <input 
                        className='border-[1px] border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-1 w-[10.5rem] rounded-r-[5px]' 
                        type="text" 
                        name="squareFoot"
                        value={propertyDetails.squareFoot}
                        onChange={handleInputChange}
                        placeholder='000'
                      />
                    </div>
                  </div>

                  <div className='flex flex-col'>
                    <label className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Floor</label>
                    <div className='flex'>
                      <div className='bg-[#F8F9FA] flex items-center justify-center px-1.5 rounded-l-[5px] border-[1px] border-r-0 border-[#EAEDF1]'>
                        <Instagram className="cursor-pointer" size={17} color="#2E429E" />
                      </div>
                      <input 
                        className='border-[1px] border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-1 w-[10.5rem] rounded-r-[5px]' 
                        type="text" 
                        name="floor"
                        value={propertyDetails.floor}
                        onChange={handleInputChange}
                        placeholder='00'
                      />
                    </div>
                  </div>
                </div>

                <div className='pt-4'>
                  <div className='flex flex-col'>
                    <label className='text-[#5D7186] pb-2 font-medium text-[0.865rem]'>Property Address</label>
                    <input 
                      className='border-[1px] border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-1 h-[4rem] w-[38.5rem] rounded-[5px]' 
                      type="text" 
                      name="address"
                      value={propertyDetails.address}
                      onChange={handleInputChange}
                      placeholder='Address'
                    />
                  </div>
                </div>
                
                <div className="pt-4 flex gap-3">
                  <div className="flex flex-col">
                    <label className="text-[#5D7186] pb-2 font-medium text-[0.865rem]">Zip-Code</label>
                    <input
                      className="border border-[#EAEDF1] text-[#687D92] text-[0.865rem] font-normal outline-none px-2 py-2.5 w-[12.3rem] rounded-[5px]"
                      type="text"
                      name="zipCode"
                      value={propertyDetails.zipCode}
                      onChange={handleInputChange}
                      placeholder="Zip Code"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[#5D7186] pb-2 font-medium text-[0.865rem]">Location</label>
                    <select
                      className="bg-white border border-[#EAEDF1] text-[#878C9F] pl-2 py-2.5 w-[12.3rem] rounded-[5px] outline-none"
                      name="location"
                      value={propertyDetails.location}
                      onChange={handleInputChange}
                    >
                      <option value="rwp">rwp</option>
                      <option value="bwp">bwp</option>
                      <option value="isl">isl</option>
                      <option value="pes">pes</option>
                      <option value="kci">kci</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[#5D7186] pb-2 font-medium text-[0.865rem]">Country</label>
                    <div className="border-[#EAEDF1] rounded-[5px] w-[12.3rem]">
                      <ReactFlagsSelect
                        selected={selected}
                        onSelect={(code) => {
                          setSelected(code);
                          setPropertyDetails({
                            ...propertyDetails,
                            country: code
                          });
                        }}
                        placeholder="Country"
                        searchable
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
            
              </div>

              <div className='pl-100 flex gap-1'>
                <button className='border-[1px] border-[#2E429E] px-10 py-2 rounded-xl text-[#2E429E] text-[0.865rem] font-normal'>Cancel</button>
                <button className='border-[1px] bg-[#2E429E] px-10 py-2 rounded-xl text-[#FFFFFF] text-[0.865rem] font-normal'>Add Property</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;