'use client';

import { useRouter } from 'next/navigation';

import CustomButton from './CustomButton';
import ParamHelper from '../libraries/ParamHelper';

import { ShowMoreProps } from '../types';

const ShowMore = (props: ShowMoreProps) => {

    const { pageNumber, isNext } = props;

    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = new ParamHelper().updateSearchParams('limit', `${newLimit}`);

        router.push(newPathName, { scroll: false });
    };

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                <CustomButton
                    title='Show More'
                    btnType='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore