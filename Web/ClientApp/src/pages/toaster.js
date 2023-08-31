import React from 'react';
import toast, { Toaster, ToastBar } from 'react-hot-toast'; 

const MyToaster = () => {
    return (

        <div
            style={{
                padding: '0 0 0 5rem',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                height: '100vh'
            }}
        >
        <h1>My Toaster</h1>
            <SiteToaster />
        </div>
         
    );
};

export default MyToaster;

const notify = () => toast('Have some toast.');

function SiteToaster() {
    return (
        <div>
            <button onClick={notify}>Click for toast</button>
            <Toaster>
                {(t) => (
                    <ToastBar toast={t}>
                        {({ icon, message }) => (
                            
                            <>
                                {icon}
                                {message}
                                {t.type !== 'loading' && (
                                    <button onClick={() => toast.dismiss(t.id)}>X</button>
                                )}
                            </>
                        )}
                    </ToastBar>
                )}
                </Toaster>
        </div>
    );
}