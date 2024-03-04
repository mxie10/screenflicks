'use client'
import { useCallback, useState } from 'react';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import useLoginModal from '@/app/hooks/useLoginModal';
import Input from '../inputs/InputAlt';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const toggle = useCallback(()=>{
        registerModal.onClose();
        loginModal.onOpen();
    },[loginModal,registerModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title="Welcome to Airbnb"
                subtitle='Create an account'
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                required
            />
            {/* Hello Modal Body */}

        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <div
                className='
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                '
            >
                <div className='justify-center text-center flex flex-row item-cen gap-2'>
                    <div>
                        Already have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '
                    >
                        Log in
                    </div>
                </div>

            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal;