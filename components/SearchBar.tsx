'use client';

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

import { SearchManufacturer } from "./";

const SearchButton = (props: { otherClasses: string }) => {

    const { otherClasses } = props;

    return (
        <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
            <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40} className='object-contain'
            />
        </button>
    )
}

const SearchBar = () => {
    const router = useRouter();
    const [ manufacturer, setManufaturer ] = useState('');
    const [ model, setModel ] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer === '' && model === '') {
            return alert('Please fill in the search bar')
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        model ? searchParams.set('model', model) : searchParams.delete('model');
        manufacturer ? searchParams.set('manufacturer', manufacturer) : searchParams.delete('manufacturer');

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname, { scroll: false });
    };

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer 
                    manufacturer={manufacturer}
                    setManufacturer={setManufaturer}
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className='searchbar__item'>
                <Image src='/model-icon.png' alt='car model' width={25} height={25} className='absolute w-[20px] h-[20px] ml-4'/>
                <input type='text' name='model' value={model} onChange={e => setModel(e.target.value)} placeholder='Volkswagen' className='searchbar__input' />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}

export default SearchBar;