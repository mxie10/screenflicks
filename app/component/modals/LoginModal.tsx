'use client'

import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import useRegisterModal from '../../hooks/useRegisterModal'
import Modal from './Modal';
import Heading from '../Heading';
import { toast } from 'react-hot-toast';
import useLoginModal from '../../hooks/useLoginModal'
import { useRouter } from 'next/navigation';

const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false);

    const toggle = useCallback(()=>{
        loginModal.onClose();
        registerModal.onOpen();
    },[loginModal,registerModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title="Welcome back"
                subtitle='Login to your account'
            />
            <input
                id="email"
                disabled={isLoading}
                required
            />
            <input
                id="password"
                type="password"
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
                        Don't have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '
                    >
                        Create an account
                    </div>
                </div>

            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal;